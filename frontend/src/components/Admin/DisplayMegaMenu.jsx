import React, { useEffect, useState } from "react"
import {
  Box,
  CircularProgress,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Button,
  IconButton,
} from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { useDispatch, useSelector } from "react-redux"
import { getMegaMenus, deleteMegaMenu } from "../../features/megaMenuSlice"

const DisplayMegaMenu = ({ onEdit }) => {
  const dispatch = useDispatch()

  const { loading, error, list } = useSelector((state) => state.megaMenu)

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [openRow, setOpenRow] = useState(null)

  useEffect(() => {
    dispatch(getMegaMenus())
  }, [dispatch])

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleDelete = (menuKey) => {
    if (window.confirm("Are you sure you want to delete this mega menu?")) {
      dispatch(deleteMegaMenu(menuKey))
    }
  }

  return (
    <>
      {/* Loading */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color='error' sx={{ textAlign: "center", mt: 6 }}>
          {error}
        </Typography>
      ) : list.length === 0 ? (
        <Typography sx={{ textAlign: "center", mt: 6 }}>
          No mega menus found.
        </Typography>
      ) : (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>
                    <strong>#</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Menu Title</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Menu Key</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Sections</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Items</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Created At</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Actions</strong>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {list
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((menu, index) => {
                    const totalItems =
                      menu.data?.sections?.reduce(
                        (sum, sec) => sum + sec.items.length,
                        0
                      ) || 0

                    return (
                      <React.Fragment key={menu.id}>
                        {/* Main Row */}
                        <TableRow hover>
                          <TableCell>
                            <IconButton
                              size='small'
                              onClick={() =>
                                setOpenRow(openRow === menu.id ? null : menu.id)
                              }
                            >
                              {openRow === menu.id ? (
                                <KeyboardArrowUpIcon />
                              ) : (
                                <KeyboardArrowDownIcon />
                              )}
                            </IconButton>
                          </TableCell>

                          <TableCell>
                            {page * rowsPerPage + index + 1}
                          </TableCell>
                          <TableCell>{menu.title}</TableCell>
                          <TableCell>{menu.menu_key}</TableCell>
                          <TableCell>
                            {menu.data?.sections?.length || 0}
                          </TableCell>
                          <TableCell>{totalItems}</TableCell>
                          <TableCell>
                            {new Date(menu.created_at).toLocaleString()}
                          </TableCell>
                          <TableCell>
                            <Button
                                size="sm"
                                variant="outline-primary"
                                onClick={() => onEdit(menu)}
                              >
                                Edit
                              </Button>
                            <Button
                              size='small'
                              color='error'
                              onClick={() => handleDelete(menu.menu_key)}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>

                        {/* Expanded Row */}
                        {openRow === menu.id && (
                          <TableRow>
                            <TableCell colSpan={8}>
                              <Box sx={{ p: 2, backgroundColor: "#fafafa" }}>
                                {menu.data?.sections?.map((section, sIndex) => (
                                  <Box key={sIndex} sx={{ mb: 2 }}>
                                    <Typography fontWeight='bold'>
                                      {section.heading}
                                    </Typography>
                                    <ul style={{ marginTop: 6 }}>
                                      {section.items.map((item, iIndex) => (
                                        <li key={iIndex}>
                                          <strong>{item.label}</strong>{" "}
                                          <Typography
                                            component='span'
                                            sx={{ color: "gray" }}
                                          >
                                            ({item.link})
                                          </Typography>
                                        </li>
                                      ))}
                                    </ul>
                                  </Box>
                                ))}
                              </Box>
                            </TableCell>
                          </TableRow>
                        )}
                      </React.Fragment>
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <TablePagination
            component='div'
            count={list.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50]}
          />
        </Paper>
      )}
    </>
  )
}

export default DisplayMegaMenu
