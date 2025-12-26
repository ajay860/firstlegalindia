import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  Collapse,
  Divider,
  Paper,
  Popper
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link } from 'react-router-dom';
import { MENU_DATA } from '../../config/menu';

const ServicesHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [activeMenu, setActiveMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleToggle = (key) => {
    setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // ===== MOBILE MENU =====
  const renderMobileMenu = () => (
    <Box sx={{ width: 300, p: 2 }}>
      {MENU_DATA.map((section) => (
        <Box key={section.key}>
          <ListItem button onClick={() => handleToggle(section.key)}>
            <ListItemText primary={section.title} />
            {expandedItems[section.key] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>

          <Collapse in={expandedItems[section.key]} unmountOnExit>
            <List disablePadding>
              {section.sections.map((sub, i) => (
                <Box key={i}>
                  <ListItem
                    button
                    onClick={() => handleToggle(`${section.key}-${i}`)}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={sub.heading} />
                  </ListItem>

                  <Collapse in={expandedItems[`${section.key}-${i}`]} unmountOnExit>
                    <List disablePadding>
                      {sub.items.map((item, idx) => (
                        <ListItem
                          key={idx}
                          button
                          component={Link}
                          to={item.link}
                          onClick={handleDrawerToggle}
                          sx={{ pl: 8 }}
                        >
                          <ListItemText primary={item.label} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              ))}
            </List>
          </Collapse>
          <Divider />
        </Box>
      ))}
    </Box>
  );

  // ===== DESKTOP MENU =====
  const renderDesktopMenu = () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
      {MENU_DATA.map((section) => (
        <Button
          key={section.key}
          color="inherit"
          sx={{ fontWeight: 'bold', mx: 1 }}
          onMouseEnter={(e) => {
            setActiveMenu(section.key);
            setAnchorEl(e.currentTarget);
          }}
          endIcon={
            activeMenu === section.key ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
        >
          {section.title}
        </Button>
      ))}
    </Box>
  );

  return (
    // 🔥 SINGLE HOVER ZONE
    <Box
      onMouseLeave={() => {
        setActiveMenu(null);
        setAnchorEl(null);
      }}
       sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10
       }}
    >
      <AppBar position="sticky" color="default"   elevation={0}
      sx={{
        borderBottom: 'none',          // remove border if any
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', // ✅ custom shadow
        zIndex: (theme) => theme.zIndex.appBar,
        bgcolor: 'white',
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                component={Link}
                to="/"
                sx={{ textDecoration: 'none', color: 'inherit' }}
              >
                <img src="/logo.png" alt="Logo" height={40} />
              </Typography>
            </Box>

            {isMobile ? (
              <>
                <IconButton onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                >
                  {renderMobileMenu()}
                </Drawer>
              </>
            ) : (
              renderDesktopMenu()
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* ===== MEGA DROPDOWN ===== */}
      <Popper
        open={Boolean(activeMenu)}
        anchorEl={anchorEl}
        placement="bottom-start"
        disablePortal
        sx={{
          width: '100%',
          left: '0 !important',
          zIndex: theme.zIndex.appBar - 1,
        }}
      >
        <Paper sx={{ borderRadius: 0, py: 4 }}>
          <Container maxWidth="lg">
            <Box
              display="grid"
              gridTemplateColumns={{
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              }}
              gap={4}
            >
              {MENU_DATA.find((m) => m.key === activeMenu)?.sections.map(
                (sub, i) => (
                  <Box key={i}>
                    <Typography fontWeight="bold" gutterBottom>
                      {sub.heading}
                    </Typography>
                    <List>
                      {sub.items.map((item, idx) => (
                        <ListItem
                          key={idx}
                          button
                          component={Link}
                          to={item.link}
                          onClick={() => setActiveMenu(null)}
                          sx={{ p: 0 }}
                        >
                          <ListItemText primary={item.label} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )
              )}
            </Box>
          </Container>
        </Paper>
      </Popper>
    </Box>
  );
};

export default ServicesHeader;
