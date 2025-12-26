import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getMegaMenus } from '../../features/megaMenuSlice';

const ServicesHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useDispatch();
  const { list: megaMenu, loading } = useSelector(state => state.megaMenu);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [activeMenu, setActiveMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleToggle = (key) => setExpandedItems(prev => ({ ...prev, [key]: !prev[key] }));

  useEffect(() => {
    dispatch(getMegaMenus());
  }, [dispatch]);

  // ===== MOBILE MENU =====
  const renderMobileMenu = () => (
    <Box sx={{ width: 300, p: 2 }}>
      {megaMenu.map(section => (
        <Box key={section.menu_key}>
          <ListItem button onClick={() => handleToggle(section.menu_key)}>
            <ListItemText primary={section.title} />
            {expandedItems[section.menu_key] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>

          <Collapse in={expandedItems[section.menu_key]} unmountOnExit>
            <List disablePadding>
              {section.data?.sections?.map((sub, i) => (
                <Box key={i}>
                  <ListItem
                    button
                    onClick={() => handleToggle(`${section.menu_key}-${i}`)}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary={sub.heading} />
                  </ListItem>

                  <Collapse in={expandedItems[`${section.menu_key}-${i}`]} unmountOnExit>
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
      {megaMenu.map(section => (
        <Button
          key={section.menu_key}
          color="inherit"
          sx={{ fontWeight: 'bold', mx: 1 }}
          onMouseEnter={(e) => {
            setActiveMenu(section.menu_key);
            setAnchorEl(e.currentTarget);
          }}
          endIcon={activeMenu === section.menu_key ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {section.title}
        </Button>
      ))}
    </Box>
  );

  return (
    <Box
      onMouseLeave={() => {
        setActiveMenu(null);
        setAnchorEl(null);
      }}
      sx={{ position: 'sticky', top: 0, zIndex: 10 }}
    >
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          borderBottom: 'none',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          zIndex: theme.zIndex.appBar,
          bgcolor: 'white',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <Typography component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
                <img src="/logo.png" alt="Logo" height={40} />
              </Typography>
            </Box>

            {isMobile ? (
              <>
                <IconButton onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                  {loading ? (
                    <Typography sx={{ p: 2 }}>Loading...</Typography>
                  ) : (
                    renderMobileMenu()
                  )}
                </Drawer>
              </>
            ) : (
              loading ? <Typography sx={{ px: 2 }}>Loading menus...</Typography> : renderDesktopMenu()
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
              {megaMenu
                .find(m => m.menu_key === activeMenu)
                ?.data?.sections?.map((sub, i) => (
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
                ))}
            </Box>
          </Container>
        </Paper>
      </Popper>
    </Box>
  );
};

export default ServicesHeader;
