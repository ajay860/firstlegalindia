import React, { useEffect, useState, useMemo } from "react"
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
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"

import {
  getAllServices,
  deleteService,
} from "../../../features/services/serviceSlice"

const AllServices = ({ onEdit }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error, services } = useSelector((state) => state.services)

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [deleteId, setDeleteId] = useState(null)

  /* ================= Fetch ================= */
  useEffect(() => {
    dispatch(getAllServices())
  }, [dispatch])

  /* ================= Dynamic Columns ================= */
  const columns = useMemo(() => {
    if (!services?.length) return []
    return Object.keys(services[0])
  }, [services])

  /* ================= Helpers ================= */
  const renderValue = (value, key) => {
    if (value === null || value === undefined) return "-"
    if (typeof value === "boolean") return value ? "Yes" : "No"
    if (typeof value === "object") return JSON.stringify(value)
    const str = value.toString()
    // Show preview only for long text columns
    if (key === "description" || key === "article_content") {
      return str.length > 100 ? str.slice(0, 100) + "..." : str
    }
    return str
  }

  /* ================= Delete ================= */
  const handleDelete = () => {
    dispatch(deleteService(deleteId))
    setDeleteId(null)
  }

  return (
    <>
      {/* Loading */}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress />
        </Box>
      )}

      {/* Error */}
      {!loading && error && (
        <Typography color='error' sx={{ textAlign: "center", mt: 6 }}>
          {error}
        </Typography>
      )}

      {/* Empty */}
      {!loading && !error && services.length === 0 && (
        <Typography sx={{ textAlign: "center", mt: 6 }}>
          No services found.
        </Typography>
      )}

      {/* Table */}
      {!loading && services.length > 0 && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 600, overflowX: "auto" }}>
            <Table stickyHeader size='small'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ minWidth: 50 }}>#</TableCell>

                  {columns.map((col) => (
                    <TableCell
                      key={col}
                      sx={{ minWidth: 160, whiteSpace: "nowrap" }}
                    >
                      {col.replace(/_/g, " ").toUpperCase()}
                    </TableCell>
                  ))}

                  <TableCell
                    sx={{
                      minWidth: 120,
                      position: "sticky",
                      right: 0,
                      backgroundColor: "#fff",
                      zIndex: 2,
                    }}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {services
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((service, index) => (
                    <TableRow hover key={service.id}>
                      <TableCell>{page * rowsPerPage + index + 1}</TableCell>

                      {columns.map((col) => (
                        <TableCell key={col}>
                          {col === "description" ||
                          col === "article_content" ? (
                            <Tooltip title={service[col] || ""}>
                              <span>{renderValue(service[col], col)}</span>
                            </Tooltip>
                          ) : (
                            renderValue(service[col], col)
                          )}
                        </TableCell>
                      ))}

                      <TableCell
                        sx={{
                          position: "sticky",
                          right: 0,
                          backgroundColor: "#fff",
                        }}
                      >
                        <IconButton
                          color='primary'
                          onClick={() => {
                            navigate(`/admin/edit-service/${service.id}`)
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color='error'
                          onClick={() => setDeleteId(service.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component='div'
            count={services.length}
            page={page}
            onPageChange={(_, p) => setPage(p)}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={(e) => {
              setRowsPerPage(parseInt(e.target.value, 10))
              setPage(0)
            }}
            rowsPerPageOptions={[5, 10, 25, 50]}
          />
        </Paper>
      )}

      {/* Delete Dialog */}
      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
        <DialogTitle>Delete Service</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to permanently delete this service?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)}>Cancel</Button>
          <Button color='error' onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AllServices
