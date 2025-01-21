import React, { useState } from "react";
import DeleteModal from "../../Components/Modals/DeleteModal/DeleteModal";
import EditModal from "../../Components/Modals/EditModal/EditModal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack, Tooltip, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function Users() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleDeleteModal = () => {
    setShowDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleEditModal = () => {
    setShowEditModal(true);
  };
  const closeEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <div className="new-product-header">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Contact no</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Buy</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>Moein</TableCell>
              <TableCell>Zidehsaraei</TableCell>
              <TableCell>Moein.z</TableCell>
              <TableCell>zideh57</TableCell>
              <TableCell>07543390443</TableCell>
              <TableCell>zidehsaraei.moein@gmail.com</TableCell>
              <TableCell>Manchester</TableCell>
              <TableCell>BL22JY</TableCell>
              <TableCell>10</TableCell>
              <TableCell>350</TableCell>
              <TableCell>
                <Stack direction="row" sx={{ gap: "10px" }}>
                  <Tooltip title="Edit" arrow>
                    <IconButton
                      sx={{
                        backgroundColor: "#E5F6FD",
                        color: "#0288EF",
                        "&:hover": {
                          backgroundColor: "#0288EF",
                          color: "#E5F6FD",
                        },
                      }}
                      onClick={() => {
                        handleEditModal();
                      }}
                    >
                      <ModeEditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete" arrow>
                    <IconButton
                      sx={{
                        backgroundColor: "#FDEDED",
                        color: "#D32F2F",
                        "&:hover": {
                          backgroundColor: "#D32F2F",
                          color: "#FDEDED",
                        },
                      }}
                      onClick={() => {
                        handleDeleteModal();
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <DeleteModal
        open={showDeleteModal}
        deleteModalClose={closeDeleteModal}
        children
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          Are you sure to delete this user?
        </Typography>
      </DeleteModal>

      <EditModal open={showEditModal} editModalClose={closeEditModal}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit User
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "35ch" },
            display: "flex",
            flexDirection: "column",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="first name"
            onChange={(event) => {}}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="last name"
            onChange={(event) => {}}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="userName"
            onChange={(event) => {}}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="password"
            onChange={(event) => {}}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="phone number"
            onChange={(event) => {}}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="email"
            onChange={(event) => {}}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="city"
            onChange={(event) => {}}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="address"
            onChange={(event) => {}}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="score"
            onChange={(event) => {}}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="buy"
            onChange={(event) => {}}
          />
          <Button color="secondary" variant="contained" onClick={() => {}}>
            save change
          </Button>
        </Box>
      </EditModal>
    </div>
  );
}
