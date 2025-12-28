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
} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { getHomeServices } from "../../../features/services/serviceSlice"
import { useNavigate } from "react-router-dom"

const HomeServiceSlider = ({ onEdit }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const { loading, error, homeServices } = useSelector(
    (state) => state.services
  )

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    dispatch(getHomeServices())
  }, [dispatch])

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" sx={{ textAlign: "center", mt: 6 }}>
          {error}
        </Typography>
      ) : homeServices?.length === 0 ? (
        <Typography sx={{ textAlign: "center", mt: 6 }}>
          No services found.
        </Typography>
      ) : (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>#</strong></TableCell>
                  <TableCell><strong>Service Name</strong></TableCell>
                  <TableCell><strong>Description</strong></TableCell>
                  <TableCell><strong>Created At</strong></TableCell>
                  <TableCell><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {homeServices
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((service, index) => (
                    <TableRow hover key={service.id}>
                      <TableCell>
                        {page * rowsPerPage + index + 1}
                      </TableCell>
                      <TableCell>{service.title}</TableCell>
                      <TableCell>{service.description}</TableCell>
                      <TableCell>
                        {new Date(service.created_at).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => navigate(`/admin/edit-service/${service.id}`)}
                        >
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={homeServices?.length}
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

export default HomeServiceSlider
