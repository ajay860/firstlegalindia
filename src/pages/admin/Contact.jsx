import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  TextField,
  TablePagination,
} from "@mui/material";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllContactsThunk } from "../../features/contact/contactSlice";

const ContactAdmin = () => {
  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector((state) => state.contact);

  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  // Filtered and searched contacts
  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter((contact) => {
        const matchesSearch =
          contact.user_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.phone_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.service_chosen.toLowerCase().includes(searchQuery.toLowerCase());

        let matchesDate = true;
        const contactDate = new Date(contact.created_at || contact.date);

        if (startDate) {
          matchesDate = matchesDate && contactDate >= new Date(startDate);
        }
        if (endDate) {
          // Include the end date fully
          const end = new Date(endDate);
          end.setHours(23, 59, 59, 999);
          matchesDate = matchesDate && contactDate <= end;
        }

        return matchesSearch && matchesDate;
      })
    : [];

  // Pagination handlers
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ py: 6, background: "#f5f5f5", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Contact Submissions
        </Typography>

        {/* Search & Date Filter */}
        <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
          <TextField
            label="Search by name, phone, or service"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ flex: 1, minWidth: 200 }}
          />
          <TextField
            label="Start Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <TextField
            label="End Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Box>

        {/* Loading / Error */}
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" sx={{ textAlign: "center", mt: 6 }}>
            {error}
          </Typography>
        ) : filteredContacts.length === 0 ? (
          <Typography sx={{ textAlign: "center", mt: 6 }}>No contacts found.</Typography>
        ) : (
          <Paper>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>#</strong></TableCell>
                    <TableCell><strong>Name</strong></TableCell>
                    <TableCell><strong>Phone</strong></TableCell>
                    <TableCell><strong>Service Chosen</strong></TableCell>
                    <TableCell><strong>Message</strong></TableCell>
                    <TableCell><strong>Date Submitted</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredContacts
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((contact, index) => (
                      <TableRow key={contact.id || index}>
                        <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                        <TableCell>{contact.user_name}</TableCell>
                        <TableCell>{contact.phone_number}</TableCell>
                        <TableCell>{contact.service_chosen}</TableCell>
                        <TableCell>{contact.message}</TableCell>
                        <TableCell>
                          {new Date(contact.created_at || contact.date).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Pagination */}
            <TablePagination
              component="div"
              count={filteredContacts.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 25, 50]}
            />
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default ContactAdmin;
