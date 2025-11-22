import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const servicesOpenMenu = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleServicesClick = (event) => {
    if (isMobile) {
      setServicesOpen(!servicesOpen);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleResourcesClick = () => {
    setResourcesOpen(!resourcesOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    {
      title: 'Services',
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
      submenu: [
        { title: 'Blogs', path: '/resources/blogs' },
        { title: 'Tax Calendar', path: '/resources/tax-calendar' },
        { title: 'Download Forms', path: '/resources/download-forms' },
        { title: 'Client Portal', path: '/client-portal' },
      ],
    },
    { title: 'Contact Us', path: '/contact' },
  ];

  const renderDesktopMenu = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
      {menuItems.map((item) => (
        <div key={item.title}>
          {item.submenu ? (
            <>
              <Button
                color="inherit"
                onClick={handleServicesClick}
                endIcon={item.title === 'Services' && <ExpandMoreIcon />}
                sx={{ mx: 1 }}
              >
                {item.title}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={servicesOpenMenu && item.title === 'Services'}
                onClose={handleClose}
              >
                {item.submenu.map((subItem) => (
                  <MenuItem key={subItem.title} onClick={handleClose} component={Link} to={subItem.path}>
                    {subItem.title}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Button color="inherit" component={Link} to={item.path} sx={{ mx: 1 }}>
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
                <ListItem button onClick={item.title === 'Services' ? handleServicesClick : handleResourcesClick}>
                  <ListItemText primary={item.title} />
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
                      <ListItem button key={subItem.title} component={Link} to={subItem.path} onClick={handleDrawerToggle}>
                        <ListItemText primary={subItem.title} sx={{ pl: 4 }} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItem button component={Link} to={item.path} onClick={handleDrawerToggle}>
                <ListItemText primary={item.title} />
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

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: 'text.primary' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
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
          </Typography>

          {!isMobile && renderDesktopMenu()}
          
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
            {!isMobile && (
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/book-appointment"
                sx={{ ml: 2 }}
              >
                Book Appointment
              </Button>
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
