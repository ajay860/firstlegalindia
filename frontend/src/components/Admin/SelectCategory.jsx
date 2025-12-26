import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Paper,
  Button,
  Divider,
} from "@mui/material";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  getMegaMenus,
  deleteMegaMenu,
} from "../../features/megaMenuSlice";

const SelectCategory = () => {
  const dispatch = useDispatch();
  const { loading, error, list } = useSelector(
    (state) => state.megaMenu
  );

  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    dispatch(getMegaMenus());
  }, [dispatch]);

  /* ---------- Grouped Options ---------- */
  const groupedOptions = list.reduce((acc, menu) => {
    const category = menu.category || "Other";

    if (!acc[category]) acc[category] = [];

    acc[category].push({
      label: menu.title,       // shown in dropdown
      value: menu.menu_key,    // stored value
      ...menu,                 // full object
    });

    return acc;
  }, {});

  const selectOptions = Object.keys(groupedOptions).map((category) => ({
    label: category,
    options: groupedOptions[category],
  }));

  console.log("selectOptions" ,selectOptions)
  
  return (
    <Box>
      {/* Loading */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" sx={{ textAlign: "center", mt: 6 }}>
          {error}
        </Typography>
      ) : (
        <>
          {/* Grouped Searchable Select */}
          <Box sx={{ maxWidth: 420, mb: 4 }}>
            <Select
              options={selectOptions}
              placeholder="Search & select mega menu..."
              value={selectedMenu}
              onChange={setSelectedMenu}
              isClearable
              isSearchable
            />
          </Box>

          {/* Selected Menu Preview */}
          {selectedMenu && (
            <Paper sx={{ p: 3 }}>
              <Typography color="text.secondary" sx={{ mb: 2 }}>
                Menu Key: <strong>{selectedMenu.menu_key}</strong>
              </Typography>

              <Divider sx={{ mb: 2 }} />

              {selectedMenu.data?.sections?.map((section, sIndex) => (
                <Box key={sIndex} sx={{ mb: 3 }}>
                  <Typography fontWeight="bold">
                    {section.heading}
                  </Typography>

                  <ul style={{ marginTop: 6 }}>
                    {section.items.map((item, iIndex) => (
                      <li key={iIndex}>
                        <strong>{item.label}</strong>{" "}
                        <Typography
                          component="span"
                          sx={{ color: "gray" }}
                        >
                          ({item.link})
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              ))}

            </Paper>
          )}
        </>
      )}
    </Box>
  );
};

export default SelectCategory;
