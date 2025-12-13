import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  Box,
  Typography,
  Container,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Link } from "react-router-dom"
import { MENU_DATA } from "../../config/menu.js"

const SubHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [activeKey, setActiveKey] = useState(null)

  const handleOpen = (event, key) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget)
    setActiveKey(key)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setActiveKey(null)
  }

  const activeMenu = MENU_DATA.find((m) => m.key === activeKey)

  return (
    <AppBar
      position='static'
      elevation={1}
      sx={{
        bgcolor: "#d1e9e6",
        color: "#000",
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 20,
            "@media (min-width:600px)": {
              minHeight: 44,
            },
            gap: 1,
            px: 1,
          }}
        >
          {MENU_DATA.map((menu) => (
            <Button
              key={menu.key}
              onMouseDown={(e) => handleOpen(e, menu.key)}
              endIcon={<ExpandMoreIcon fontSize='small' />}
              sx={{
                fontWeight: 600,
                py: 0.5, // 🔽 reduced padding
                px: 1.5,
                minHeight: "unset",
                textTransform: "none",
              }}
            >
              {menu.title}
            </Button>
          ))}

          {/* ---------- SINGLE MEGA MENU ---------- */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            disableAutoFocusItem
            PaperProps={{
              sx: {
                width: "100vw",
                left: "0 !important",
                bgcolor: "#008080",
                color: "#fff",
                mt: 1, // 🔽 reduced margin
                p: 2, // 🔽 reduced padding
              },
            }}
          >
            <Box
              sx={{
                maxWidth: "lg",
                mx: "auto",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 2, // 🔽 reduced gap
              }}
            >
              {activeMenu?.sections.map((section) => (
                <Box key={section.heading}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      mb: 0.5,
                      fontSize: "0.9rem",
                    }}
                  >
                    {section.heading}
                  </Typography>

                  {section.items.map((item) => (
                    <Typography
                      key={item.label}
                      component={Link}
                      to={item.link}
                      onClick={handleClose}
                      sx={{
                        display: "block",
                        color: "#fff",
                        textDecoration: "none",
                        py: 0.25, // 🔽 reduced item height
                        fontSize: "0.85rem",
                        lineHeight: 1.4,
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  ))}
                </Box>
              ))}
            </Box>
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
                //   onClick={handleClose}
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
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default SubHeader
