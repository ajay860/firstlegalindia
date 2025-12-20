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

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

const drawerWidth = 280;

const navItems = [
  { label: "Home", path: "/admin/dashboard", icon: <HomeIcon />, color: "#e3f2fd" },
  { label: "Service", path: "/admin/service", icon: <PersonIcon />, color: "#e8f5e9" },
  // { label: "Security & sign-in", path: "/admin/security", icon: <SecurityIcon />, color: "#e1f5fe" },
  // { label: "Password Manager", path: "/admin/passwords", icon: <KeyIcon />, color: "#e0f2f1" },
  // { label: "Your devices", path: "/admin/devices", icon: <DevicesIcon />, color: "#e3f2fd" },
  // { label: "Data & privacy", path: "/admin/privacy", icon: <PrivacyTipIcon />, color: "#ede7f6" },
  // { label: "People & sharing", path: "/admin/people", icon: <PeopleIcon />, color: "#fce4ec" },
  // { label: "Payments & subscriptions", path: "/admin/payments", icon: <PaymentsIcon />, color: "#fff3e0" },
];

const AdminLayout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "0px solid #e5e7eb",
            // bgcolor: "#f8fafc",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6">
            <span style={{fontWeight:600}}>First Legal</span> India
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
                "&.active": {
                  bgcolor: "#e8f0fe",
                  fontWeight: 600,
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

      {/* Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <Toolbar /> */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
