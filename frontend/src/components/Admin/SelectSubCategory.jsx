import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getMegaMenus } from "../../features/megaMenuSlice";

const SelectSubCategory = ({
  value,
  onCategoryChange,
  onSubCategoryChange,
}) => {
  const dispatch = useDispatch();
  const { loading, error, list } = useSelector(
    (state) => state.megaMenu
  );

  const [selectedMenu, setSelectedMenu] = useState(value?.category || null);
  const [selectedItem, setSelectedItem] = useState(value?.subcategory || null);

  useEffect(() => {
    dispatch(getMegaMenus());
  }, [dispatch]);


  /* ---------- Group Mega Menus by Category ---------- */
  const groupedOptions = list.reduce((acc, menu) => {
    const category = menu.category || "Other";

    if (!acc[category]) acc[category] = [];

    acc[category].push({
      label: menu.title,
      value: menu.menu_key,
      data: menu,
    });

    return acc;
  }, {});

  const menuOptions = Object.keys(groupedOptions).map((category) => ({
    label: category,
    options: groupedOptions[category],
  }));


  /* ---------- Menu Change ---------- */
  const handleMenuChange = (menu) => {
    setSelectedMenu(menu);
    setSelectedItem(null);

    onCategoryChange?.({
      label: menu?.label || "",
      value: menu?.value || "",
    });

    onSubCategoryChange?.(null);
  };

  /* ---------- Sub Category Options ---------- */
  const itemOptions =
    selectedMenu?.data?.data?.sections?.map((section) => ({
      label: section.heading,
      options: section.items.map((item) => ({
        label: item.label,
        value: item.link,
      })),
    })) || [];

    
  useEffect(() => {
    if (!list.length) return; // wait until list is loaded

    // Find category object from menuOptions
    const matchedCategory = menuOptions
      .flatMap((group) => group.options)
      .find((opt) => opt.value === value?.category?.value);

    setSelectedMenu(matchedCategory || null);

    // Find subcategory object from itemOptions
    const matchedSub = itemOptions
      .flatMap((group) => group.options)
      .find((opt) => opt.value === value?.subcategory?.value);

    setSelectedItem(matchedSub || null);
}, [list, value]);

  return (
    <Box mb={3}>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <>
          {/* Category */}
          <Box sx={{ maxWidth: 420, mb: 2 }}>
            <Select
              options={menuOptions}
              placeholder="Select category..."
              value={selectedMenu}
              onChange={handleMenuChange}
              isClearable
              isSearchable
            />
          </Box>
          {/* Sub Category */}
          {selectedMenu && (
            <Box sx={{ maxWidth: 420 }}>
              <Select
                options={itemOptions}
                placeholder="Select sub-category..."
                value={selectedItem}
                onChange={(item) => {
                  setSelectedItem(item);
                  onSubCategoryChange?.(item);
                }}
                isClearable
                isSearchable
              />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default SelectSubCategory;
