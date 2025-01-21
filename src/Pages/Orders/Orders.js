import React, { useState } from "react";
import DeleteModal from "../../Components/Modals/DeleteModal/DeleteModal";
import AcceptModal from "../../Components/Modals/AcceptModal/AcceptModal";
import RejectModal from "../../Components/Modals/RejectModal/RejectModal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { pink } from "@mui/material/colors";

export default function Orders() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const handleDeleteModal = () => {
    setShowDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleAcceptModal = () => {
    setShowAcceptModal(true);
  };
  const closeAcceptModal = () => {
    setShowAcceptModal(false);
  };

  const handleRejectModal = () => {
    setShowRejectModal(true);
  };
  const closeRejectModal = () => {
    setShowRejectModal(false);
  };

  return (
    <div className="new-product-header">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product name</TableCell>
              <TableCell>Customer name</TableCell>
              <TableCell>Date of order</TableCell>
              <TableCell>Time of order</TableCell>
              <TableCell>Total price</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>Sale count</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>Laptop</TableCell>
              <TableCell>Hamed Rastgoo</TableCell>
              <TableCell>17.01.25</TableCell>
              <TableCell>12:08</TableCell>
              <TableCell>17</TableCell>
              <TableCell>2</TableCell>
              <TableCell>6</TableCell>
              <TableCell>5</TableCell>
              <TableCell>2</TableCell>
              <TableCell>
                <Stack direction="row" sx={{ gap: "10px" }}>
                  <Tooltip title="Confirm" arrow>
                    <IconButton
                      color="success"
                      onClick={() => {
                        handleAcceptModal();
                      }}
                    >
                      <CheckIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Reject" arrow>
                    <IconButton
                      sx={{ color: pink[500] }}
                      onClick={() => {
                        handleRejectModal();
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Delete" arrow>
                    <IconButton
                      sx={{
                        backgroundColor: "#FDEDED",
                        color: "#D32F2F",
                        "&:hover": {
                          backgroundColor: "#D32F2F", // Lighter red on hover
                          color: "#FDEDED", // White color on hover
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
          Are you sure to delete this order?
        </Typography>
      </DeleteModal>

      <AcceptModal open={showAcceptModal} acceptModalClose={closeAcceptModal}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure to confirm this order?
        </Typography>
      </AcceptModal>

      <RejectModal open={showRejectModal} rejectModalClose={closeRejectModal}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure to reject this order?
        </Typography>
      </RejectModal>
    </div>
  );
}
