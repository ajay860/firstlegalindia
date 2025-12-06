import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activePath, setActivePath] = useState('/');
  const [servicesOpenMenu, setServicesOpenMenu] = useState(false);
  const [resourcesOpenMenu, setResourcesOpenMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    setActivePath(location.pathname);
    // Close mobile menu when route changes
    setMobileOpen(false);
  }, [location]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleServicesClick = (event) => {
    if (isMobile) {
      setServicesOpen(!servicesOpen);
    } else {
      setAnchorEl(event.currentTarget);
      setServicesOpenMenu(true);
      setResourcesOpenMenu(false);
    }
  };

  const handleResourcesClick = (event) => {
    if (isMobile) {
      setResourcesOpen(!resourcesOpen);
    } else {
      setAnchorEl(event.currentTarget);
      setResourcesOpenMenu(true);
      setServicesOpenMenu(false);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setServicesOpenMenu(false);
    setResourcesOpenMenu(false);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    {
      title: 'Services',
      path: '#',
      submenu: [
        { title: 'Taxation', path: '/services/taxation' },
        { title: 'Accounting', path: '/services/accounting' },
        { title: 'Audit & Assurance', path: '/services/audit-assurance' },
        { title: 'Business Registration', path: '/services/business-registration' },
        { title: 'Advisory', path: '/services/advisory' },
      ],
    },
    {
      title: 'Resources',
      path: '/resources',
      // submenu: [
      //   { title: 'Blogs', path: '/resources/blogs' },
      //   { title: 'Tax Calendar', path: '/resources/tax-calendar' },
      //   { title: 'Download Forms', path: '/resources/download-forms' },
      //   { title: 'Client Portal', path: '/client-portal' },
      // ],
    },
    { title: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return activePath === path;
    }
    // For submenu items, check for exact match or parent path
    return activePath === path || 
           (path !== '/' && activePath.startsWith(path) && 
            (activePath[path.length] === '/' || activePath.length === path.length));
  };

  const getButtonSx = (path) => ({
    mx: 1,
    color: isActive(path) ? 'primary.main' : 'text.primary',
    // borderBottom: isActive(path) ? '2px solid' : 'none',
    borderColor: 'primary.main',
    borderRadius: 0,
    fontWeight: isActive(path) ? 'bold' : 'normal',
    '&:hover': {
      color: 'primary.dark',
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
    },
  });

  const renderDesktopMenu = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, ml: 4 }}>
      {menuItems.map((item) => (
        <div key={item.title}>
          {item.submenu ? (
            <>
              <Button
                component={Link}
                to={item.path}
                color="inherit"
                onClick={(e) => item.title === 'Services' ? handleServicesClick(e) : handleResourcesClick(e)}
                endIcon={item.submenu ? <ExpandMoreIcon /> : null}
                sx={getButtonSx(item.path)}
              >
                {item.title}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={
                  (item.title === 'Services' && servicesOpenMenu) || 
                  (item.title === 'Resources' && resourcesOpenMenu)
                }
                onClose={handleClose}
              >
                {item.submenu.map((subItem) => (
                  <MenuItem 
                    key={subItem.title} 
                    onClick={handleClose} 
                    component={Link} 
                    to={subItem.path}
                    sx={{
                      color: isActive(subItem.path) ? 'primary.main' : 'text.primary',
                      fontWeight: isActive(subItem.path) ? '900' : '600',
                      fontSize: '16px',
                    }}
                  >
                    {subItem.title}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Button color="inherit" component={Link} to={item.path} sx={getButtonSx(item.path)}>
              {item.title}
            </Button>
          )}
        </div>
      ))}
    </Box>
  );

  const renderMobileMenu = () => (
    <Box sx={{ width: 250 }}>
      <List>
        {menuItems.map((item) => (
          <div key={item.title}>
            {item.submenu ? (
              <>
                <ListItem 
                  button 
                  onClick={item.title === 'Services' ? handleServicesClick : handleResourcesClick}
                  sx={{
                    backgroundColor: isActive(item.path) ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  <ListItemText 
                    primary={item.title} 
                    primaryTypographyProps={{
                      fontWeight: isActive(item.path) ? '600' : 'normal',
                      color: isActive(item.path) ? 'primary.main' : 'rgba(0, 0, 0, 0.87)',
                    }}
                  />
                  {item.title === 'Services' ? (
                    servicesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />
                  ) : resourcesOpen ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </ListItem>
                <Collapse in={item.title === 'Services' ? servicesOpen : resourcesOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.submenu.map((subItem) => (
                      <ListItem
                        key={subItem.title}
                        button
                        component={Link}
                        to={subItem.path}
                        onClick={handleDrawerToggle}
                        sx={{
                          pl: 4,
                          backgroundColor: isActive(subItem.path) ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          },
                        }}
                      >
                        <ListItemText
                          primary={subItem.title}
                          primaryTypographyProps={{
                            fontWeight: isActive(subItem.path) ? '600' : 'normal',
                            color: isActive(subItem.path) ? 'primary.main' : 'rgba(0, 0, 0, 0.87)',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItem
                button
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  backgroundColor: isActive(item.path) ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontWeight: isActive(item.path) ? 'bold' : 'normal',
                    color: isActive(item.path) ? 'primary.main' : 'text.primary',
                  }}
                />
              </ListItem>
            )}
            <Divider />
          </div>
        ))}
      </List>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/book-appointment"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleDrawerToggle}
        >
          Book Appointment
        </Button>
      </Box>
    </Box>
  );

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <AppBar  position={sticky ? "fixed" : "static"}
  elevation={sticky ? 4 : 1} sx={{ bgcolor: 'white', color: 'text.primary', boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0px 1px 5px rgba(0,0,0,0.10)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <img src="/logo.png" alt="Logo" style={{ height: 40, marginRight: 16 }} />
          {/* <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            YourLogo
          </Typography> */}

          {!isMobile && renderDesktopMenu()}

          <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto', gap: 1 }}>
            {!isMobile && (
              <>
                <IconButton 
                  href="tel:9977999663" 
                  color="primary" 
                  aria-label="Call us"
                  sx={{ 
                    color: 'primary.main',
                    '&:hover': { 
                      backgroundColor: 'rgba(25, 118, 210, 0.04)',
                    }
                  }}
                >
                  <PhoneIcon />
                </IconButton>
                <IconButton 
                  href="https://wa.me/919977999663" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  color="primary" 
                  aria-label="WhatsApp us"
                  sx={{ 
                    color: 'primary.main',
                    '&:hover': { 
                      backgroundColor: 'rgba(25, 118, 210, 0.04)',
                    }
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/book-appointment"
                  sx={{ ml: 1 }}
                >
                  Book Appointment
                </Button>
              </>
            )}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {renderMobileMenu()}
      </Drawer>
    </AppBar>
  );
};

export default Header;
