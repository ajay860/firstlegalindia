import React from "react";
import { Breadcrumbs, Typography, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink } from "react-router-dom";

/**
 * PageBreadcrumb
 *
 * @param {Array} items - [{ label, to }]
 * @param {string} current - Current page label
 */
const PageBreadcrumb = ({ items = [], current }) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      sx={{ mb: 3 }}
    >
      {items.map((item, index) => (
        <Link
          key={index}
          component={RouterLink}
          underline="hover"
          color="inherit"
          to={item.to}
        >
          {item.label}
        </Link>
      ))}

      <Typography color="text.primary">{current}</Typography>
    </Breadcrumbs>
  );
};

export default PageBreadcrumb;
