import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ContactsIcon from "@mui/icons-material/Contacts";

const drawerWidth = 280;

const navItems = [
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon fontSize="small" />,
    color: "#e3f2fd",
  },
  {
    label: "Services",
    path: "/admin/home-services",
    icon: <MiscellaneousServicesIcon fontSize="small" />,
    color: "#e8f5e9",
  },
  {
    label: "My Leads",
    path: "/admin/contact",
    icon: <ContactsIcon fontSize="small" />,
    color: "#e1f5fe",
  },
];

const AdminLayout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* ================= Sidebar ================= */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid #e5e7eb",
            bgcolor: "#ffffff",
          },
        }}
      >
        <Toolbar sx={{ px: 2 }}>
          <Typography variant="h6" noWrap>
            <span style={{ fontWeight: 600 }}>First Legal</span> India
          </Typography>
        </Toolbar>

        <List sx={{ px: 1 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.label}
              component={NavLink}
              to={item.path}
              sx={{
                borderRadius: "999px",
                mb: 0.5,
                px: 2,
                color: "#374151",
                "&.active": {
                  bgcolor: "#e8f0fe",
                  fontWeight: 600,
                  color: "#1e40af",
                  "& .MuiAvatar-root": {
                    bgcolor: "#1e40af",
                    color: "#ffffff",
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 44 }}>
                <Avatar
                  sx={{
                    width: 36,
                    height: 36,
                    bgcolor: item.color,
                    color: "#1e40af",
                  }}
                >
                  {item.icon}
                </Avatar>
              </ListItemIcon>

              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* ================= Content ================= */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: "#f9fafb",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
