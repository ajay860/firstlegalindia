// src/components/Header/ServicesHeader.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link, useLocation } from 'react-router-dom';

const ServicesHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const location = useLocation();

  const handleToggle = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuData = [
    {
      title: 'Business Registration',
      submenu: [
        {
          title: 'Company Registration',
          items: [
            'Private Limited Company',
            'Limited Liability Partnership',
            'One Person Company',
            'Sole Proprietorship',
            'Nidhi Company',
            'Producer Company',
            'Partnership Firm',
            'Startup India Registration'
          ]
        },
        {
          title: 'International Business Setup',
          items: [
            'US Incorporation',
            'Singapore Incorporation',
            'UK Incorporation',
            'Netherlands Incorporation',
            'Hong Kong Company Incorporation',
            'Dubai Company Incorporation',
            'International Trademark Registration'
          ]
        },
        {
          title: 'Company Name Search',
          items: [
            'Company Name Search',
            'Change Company Name',
            'Business Name Generator'
          ]
        }
      ]
    },
    {
      title: 'Tax & Compliance',
      submenu: [
        {
          title: 'GST and Other Indirect Tax',
          items: [
            'GST Registration',
            'GST Filing',
            'HSN Code Finder',
            'GST Cancellation and Revocation',
            'GST Cancellation'
          ]
        },
      ]
    },
  ];

  const renderMobileMenu = () => (
    <Box sx={{ width: 300, p: 2 }}>
      {menuData.map((section, index) => (
        <div key={index}>
          <ListItem 
            button 
            onClick={() => handleToggle(`section-${index}`)}
            sx={{ 
              bgcolor: expandedItems[`section-${index}`] ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
              mb: 1
            }}
          >
            <ListItemText 
              primary={section.title} 
              primaryTypographyProps={{ fontWeight: 'bold' }}
            />
            {expandedItems[`section-${index}`] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={expandedItems[`section-${index}`]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {section.submenu.map((subsection, subIndex) => (
                <div key={subIndex}>
                  <ListItem 
                    button 
                    onClick={() => handleToggle(`subsection-${index}-${subIndex}`)}
                    sx={{ pl: 4, bgcolor: 'rgba(0, 0, 0, 0.02)' }}
                  >
                    <ListItemText 
                      primary={subsection.title} 
                      primaryTypographyProps={{ fontWeight: 'medium' }}
                    />
                    {expandedItems[`subsection-${index}-${subIndex}`] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItem>
                  <Collapse in={expandedItems[`subsection-${index}-${subIndex}`]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {subsection.items.map((item, itemIndex) => (
                        <ListItem 
                          key={itemIndex} 
                          button 
                          component={Link}
                          to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={handleDrawerToggle}
                          sx={{ pl: 8 }}
                        >
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </div>
              ))}
            </List>
          </Collapse>
          <Divider sx={{ my: 1 }} />
        </div>
      ))}
    </Box>
  );

  const renderDesktopMenu = () => (
    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
      {menuData.map((section, index) => (
        <div key={index} style={{ position: 'relative' }}>
          <Button
            color="inherit"
            onClick={() => handleToggle(`section-${index}`)}
            endIcon={expandedItems[`section-${index}`] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            sx={{ mx: 1, fontWeight: 'bold' }}
          >
            {section.title}
          </Button>
          <Menu
            open={!!expandedItems[`section-${index}`]}
            onClose={() => handleToggle(`section-${index}`)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            PaperProps={{
              style: {
                width: '80vw',
                maxWidth: '1200px',
                padding: '20px',
                maxHeight: '80vh',
                overflow: 'auto',
              }
            }}
          >
            <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={3}>
              {section.submenu.map((subsection, subIndex) => (
                <Box key={subIndex}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    {subsection.title}
                  </Typography>
                  <List>
                    {subsection.items.map((item, itemIndex) => (
                      <ListItem 
                        key={itemIndex} 
                        button 
                        component={Link}
                        to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => handleToggle(`section-${index}`)}
                        sx={{ p: '8px 0' }}
                      >
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Box>
          </Menu>
        </div>
      ))}
    </Box>
  );

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                mr: 2,
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <img 
                src="/logo.png" 
                alt="Logo" 
                style={{ height: 40, marginRight: 10 }} 
              />
              Your Brand
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
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
  );
};

export default ServicesHeader;