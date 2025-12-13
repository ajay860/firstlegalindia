import React, { useState, useEffect } from "react"
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
  Collapse,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import { Link, useLocation } from "react-router-dom"
import { MENU_DATA } from "../../config/menu.js"

const Header = () => {
  const theme = useTheme()
  const location = useLocation()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [activePath, setActivePath] = useState("/")
  const [servicesOpenMenu, setServicesOpenMenu] = useState(false)
  const [resourcesOpenMenu, setResourcesOpenMenu] = useState(false)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    setActivePath(location.pathname)
    // Close mobile menu when route changes
    setMobileOpen(false)
  }, [location])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleServicesClick = (event) => {
    if (isMobile) {
      setServicesOpen(!servicesOpen)
    } else {
      setAnchorEl(event.currentTarget)
      setServicesOpenMenu(true)
      setResourcesOpenMenu(false)
    }
  }

  const handleResourcesClick = (event) => {
    if (isMobile) {
      setResourcesOpen(!resourcesOpen)
    } else {
      setAnchorEl(event.currentTarget)
      setResourcesOpenMenu(true)
      setServicesOpenMenu(false)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
    setServicesOpenMenu(false)
    setResourcesOpenMenu(false)
  }

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact Us", path: "/contact" },
  ]

  const isActive = (path) => {
    if (path === "/") {
      return activePath === path
    }
    // For submenu items, check for exact match or parent path
    return (
      activePath === path ||
      (path !== "/" &&
        activePath.startsWith(path) &&
        (activePath[path.length] === "/" || activePath.length === path.length))
    )
  }

  const getButtonSx = (path) => ({
    mx: 1,
    color: isActive(path) ? "primary.main" : "text.primary",
    // borderBottom: isActive(path) ? '2px solid' : 'none',
    borderColor: "primary.main",
    borderRadius: 0,
    fontWeight: isActive(path) ? "bold" : "normal",
    "&:hover": {
      color: "primary.dark",
      backgroundColor: "rgba(0, 0, 0, 0.02)",
    },
  })

  const [openCategory, setOpenCategory] = useState(null)

const handleCategoryToggle = (key) => {
  setOpenCategory(openCategory === key ? null : key)
}

  const renderDesktopMenu = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        ml: 4,
        position: "relative",
      }}
    >
      {menuItems.map((item) => (
        <div key={item.title}>
          {item.submenu ? (
            <>
              <Button
                component={item.submenu ? "div" : Link}
                to={!item.submenu ? item.path : null}
                color='inherit'
                onClick={(e) => {
                  if (item.title === "Industries") {
                    e.preventDefault()
                    setAnchorEl(e.currentTarget)
                    setServicesOpenMenu(true)
                    setResourcesOpenMenu(false)
                  } else if (item.title === "Services") {
                    handleServicesClick(e)
                  } else if (item.title === "Resources") {
                    handleResourcesClick(e)
                  }
                }}
                endIcon={item.submenu ? <ExpandMoreIcon /> : null}
                sx={getButtonSx(item.path)}
              >
                {item.title}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={servicesOpenMenu && item.title === "Industries"}
                onClose={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    mt: 1.5,
                    width: "100%",
                    maxWidth: "100%",
                    left: 0,
                    right: 0,
                    maxHeight: "80vh",
                    overflow: "auto",
                    borderRadius: 0,
                    bgcolor: "#008080",
                    color: "white",
                    p: 3,
                    "& .MuiMenu-paper": {
                      width: "100%",
                      maxWidth: "100%",
                    },
                  },
                }}
                MenuListProps={{
                  sx: {
                    maxWidth: "lg",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
                    gap: 2,
                    p: 2,
                    width: "100%",
                  },
                }}
                sx={{
                  "& .MuiPaper-root": {
                    position: "absolute",
                    left: 0,
                    right: 0,
                  },
                }}
              >
                {item.title === "Industries" &&
                  item.submenu.map((subItem, index) => (
                    <MenuItem
                      key={subItem.title}
                      component={Link}
                      to={subItem.path}
                      onClick={handleClose}
                      sx={{
                        color: "white",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                        whiteSpace: "normal",
                        py: 1,
                        px: 2,
                        borderRadius: "4px",
                      }}
                    >
                      {subItem.title}
                    </MenuItem>
                  ))}
                <Box
                  sx={{
                    gridColumn: "1 / -1",
                    display: "flex",
                    justifyContent: "center",
                    mt: 2,
                    pt: 2,
                    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Button
                    variant='contained'
                    color='primary'
                    component={Link}
                    to='/industries'
                    onClick={handleClose}
                    sx={{
                      bgcolor: "white",
                      color: "#008080",
                      "&:hover": {
                        bgcolor: "rgba(255, 255, 255, 0.9)",
                      },
                      px: 4,
                      py: 1,
                      fontWeight: "bold",
                      textTransform: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Explore All Industries
                  </Button>
                </Box>
              </Menu>
            </>
          ) : (
            <Button
              color='inherit'
              component={Link}
              to={item.path}
              sx={getButtonSx(item.path)}
            >
              {item.title}
            </Button>
          )}
        </div>
      ))}
    </Box>
  )

  const renderMobileMenu = () => (
    <Box sx={{ width: 250 }}>
      <List>
        {menuItems.map((item) => (
          <div key={item.title}>
            {item.submenu ? (
              <>
                <ListItem
                  button
                  onClick={
                    item.title === "Services"
                      ? handleServicesClick
                      : handleResourcesClick
                  }
                  sx={{
                    backgroundColor: isActive(item.path)
                      ? "rgba(25, 118, 210, 0.08)"
                      : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      fontWeight: isActive(item.path) ? "600" : "normal",
                      color: isActive(item.path)
                        ? "primary.main"
                        : "rgba(0, 0, 0, 0.87)",
                    }}
                  />
                  {item.title === "Services" ? (
                    servicesOpen ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )
                  ) : resourcesOpen ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </ListItem>
                <Collapse
                  in={item.title === "Services" ? servicesOpen : resourcesOpen}
                  timeout='auto'
                  unmountOnExit
                >
                  <List component='div' disablePadding>
                    {item.submenu.map((subItem) => (
                      <ListItem
                        key={subItem.title}
                        button
                        component={Link}
                        to={subItem.path}
                        onClick={handleDrawerToggle}
                        sx={{
                          pl: 4,
                          backgroundColor: isActive(subItem.path)
                            ? "rgba(25, 118, 210, 0.08)"
                            : "transparent",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.04)",
                          },
                        }}
                      >
                        <ListItemText
                          primary={subItem.title}
                          primaryTypographyProps={{
                            fontWeight: isActive(subItem.path)
                              ? "600"
                              : "normal",
                            color: isActive(subItem.path)
                              ? "primary.main"
                              : "rgba(0, 0, 0, 0.87)",
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
                  backgroundColor: isActive(item.path)
                    ? "rgba(25, 118, 210, 0.08)"
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontWeight: isActive(item.path) ? "bold" : "normal",
                    color: isActive(item.path)
                      ? "primary.main"
                      : "text.primary",
                  }}
                />
              </ListItem>
            )}
            <Divider />
          </div>
        ))}
      </List>
      <Divider />
       {/* DYNAMIC MENU FROM MENU_DATA */}
      {MENU_DATA.map((category) => (
        <Box key={category.key}>
          {/* CATEGORY TITLE */}
          <ListItem
            button
            onClick={() => handleCategoryToggle(category.key)}
            sx={{
              backgroundColor:
                openCategory === category.key
                  ? "rgba(25,118,210,0.08)"
                  : "transparent",
            }}
          >
            <ListItemText
              primary={category.title}
              primaryTypographyProps={{ fontWeight: 600 }}
            />
            {openCategory === category.key ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </ListItem>

          {/* CATEGORY CONTENT */}
          <Collapse
            in={openCategory === category.key}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              {category.sections.map((section) => (
                <Box key={section.heading}>
                  {/* SECTION HEADING */}
                  <ListItem sx={{ pl: 3 }}>
                    <ListItemText
                      primary={section.heading}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "text.secondary",
                      }}
                    />
                  </ListItem>

                  {/* SECTION ITEMS */}
                  {section.items.map((item) => (
                    <ListItem
                      key={item.link}
                      button
                      component={Link}
                      to={item.link}
                      onClick={handleDrawerToggle}
                      sx={{
                        pl: 5,
                        "&:hover": {
                          backgroundColor: "rgba(0,0,0,0.04)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{ fontSize: 14 }}
                      />
                    </ListItem>
                  ))}
                </Box>
              ))}
            </List>
          </Collapse>

          <Divider />
        </Box>
      ))} 
      <Divider />
      <Box sx={{ p: 2, textAlign: "center" }}>
        <IconButton
          href='tel:8818888744'
          color='primary'
          aria-label='Call us'
          sx={{
            color: "primary.main",
            "&:hover": {
              backgroundColor: "rgba(25, 118, 210, 0.04)",
            },
          }}
        >
          <PhoneIcon />
        </IconButton>
        <IconButton
          href='https://wa.me/918818888744'
          target='_blank'
          rel='noopener noreferrer'
          color='primary'
          aria-label='WhatsApp us'
          sx={{
            color: "primary.main",
            "&:hover": {
              backgroundColor: "rgba(25, 118, 210, 0.04)",
            },
          }}
        >
          <WhatsAppIcon />
        </IconButton>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          to='/book-appointment'
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleDrawerToggle}
        >
          Talk Expert
        </Button>
      </Box>
    </Box>
  )

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AppBar
      position={sticky ? "fixed" : "static"}
      elevation={sticky ? 4 : 1}
      sx={{
        bgcolor: "white",
        color: "text.primary",
        boxShadow: "0 1px 2px rgba(0,0,0,0.08), 0px 1px 5px rgba(0,0,0,0.10)",
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <img
            src='/logo.png'
            alt='Logo'
            style={{ height: 40, marginRight: 16 }}
          />

          {!isMobile && renderDesktopMenu()}

          <Box
            sx={{ display: "flex", alignItems: "center", ml: "auto", gap: 1 }}
          >
            {!isMobile && (
              <>
                <IconButton
                  href='tel:8818888744'
                  color='primary'
                  aria-label='Call us'
                  sx={{
                    color: "primary.main",
                    "&:hover": {
                      backgroundColor: "rgba(25, 118, 210, 0.04)",
                    },
                  }}
                >
                  <PhoneIcon />
                </IconButton>
                <IconButton
                  href='https://wa.me/918818888744'
                  target='_blank'
                  rel='noopener noreferrer'
                  color='primary'
                  aria-label='WhatsApp us'
                  sx={{
                    color: "primary.main",
                    "&:hover": {
                      backgroundColor: "rgba(25, 118, 210, 0.04)",
                    },
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
                <Button
                  variant='contained'
                  color='primary'
                  component={Link}
                  to='/book-appointment'
                  sx={{ ml: 1 }}
                >
                  Talk Expert
                </Button>
              </>
            )}
            {isMobile && (
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
                sx={{ ml: "auto" }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {renderMobileMenu()}
      </Drawer>
    </AppBar>
  )
}

export default Header
