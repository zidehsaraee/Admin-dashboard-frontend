import React, { useState } from "react";
import DeleteModal from "../../Components/Modals/DeleteModal/DeleteModal";
import EditModal from "../../Components/Modals/EditModal/EditModal";
import AcceptModal from "../../Components/Modals/AcceptModal/AcceptModal";
import DetailesModal from "../../Components/Modals/DetailesModal/DetailesModal";
import ResponseModal from "../../Components/Modals/ResponseModal/ResponseModal";
import RejectModal from "../../Components/Modals/RejectModal/RejectModal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import NoteIcon from "@mui/icons-material/Note";
import Typography from "@mui/material/Typography";
import CommentIcon from "@mui/icons-material/Comment";
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import "./Comments.css";

export default function Comments() {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const handleDetailModal = () => {
    setShowDetailModal(true);
  };
  const closeDetailModal = () => {
    setShowDetailModal(false);
  };

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

  const handleResponseModal = () => {
    setShowResponseModal(true);
  };
  const closeResponseModal = () => {
    setShowResponseModal(false);
  };

  const closeAcceptModal = () => {
    setShowAcceptModal(false);
  };

  const handelRejectModal = () => {
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
              <TableCell>User's name</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Comment</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Moein
              </TableCell>
              <TableCell>moein</TableCell>
              <TableCell>
                <Tooltip title="Show Comment" arrow>
                  <IconButton
                    color="info"
                    onClick={() => {
                      handleDetailModal();
                    }}
                  >
                    <CommentIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
              <TableCell>18.01.25</TableCell>
              <TableCell>11:48</TableCell>
              <TableCell>
                <Stack direction="row" sx={{ gap: "10px" }}>
                  <Tooltip title="Accept" arrow>
                    <IconButton
                      color="success"
                      onClick={() => {
                        setShowAcceptModal(true);
                      }}
                    >
                      <CheckIcon />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Reject" arrow>
                    <IconButton
                      sx={{ color: pink[500] }}
                      onClick={() => {
                        handelRejectModal();
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Response" arrow>
                    <IconButton
                      sx={{
                        backgroundColor: "#E0F2F1",
                        color: "#009688",
                        "&:hover": {
                          backgroundColor: "#009688",
                          color: "#E0F2F1",
                        },
                      }}
                      onClick={() => {
                        handleResponseModal();
                      }}
                    >
                      <NoteIcon />
                    </IconButton>
                  </Tooltip>
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

      <DetailesModal
        open={showDetailModal}
        detailsModalClose={closeDetailModal}
        children
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Comment :
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
      </DetailesModal>

      <EditModal open={showEditModal} editModalClose={closeEditModal} children>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          Edit Comment
        </Typography>
        <TextField
          id="outlined-multiline-flexible"
          label="comment"
          multiline
          maxRows={15}
        />
        <Button variant="contained" color="secondary">
          Save change
        </Button>
      </EditModal>

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
          Are you sure to delete this comment?
        </Typography>
      </DeleteModal>

      <ResponseModal
        open={showResponseModal}
        ResponseModalClose={closeResponseModal}
        children
      >
        <TextField
          id="outlined-multiline-static"
          label="comment"
          multiline
          rows={4}
        />
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ marginTop: "20px" }}
        >
          Insert your response :
        </Typography>
        <TextField
          id="outlined-multiline-static"
          onChange={(event) => {}}
          multiline
          rows={4}
        />
      </ResponseModal>

      <AcceptModal
        open={showAcceptModal}
        acceptModalClose={closeAcceptModal}
        children
      >
        <Typography id="modal-modal-description" sx={{ textAlign: "center" }}>
          Are you sure to confirm this comment?
        </Typography>
      </AcceptModal>

      <RejectModal
        open={showRejectModal}
        rejectModalClose={closeRejectModal}
        children
      >
        <Typography id="modal-modal-description" sx={{ textAlign: "center" }}>
          Are you sure to reject this comment?
        </Typography>
      </RejectModal>
    </div>
    /* </Grid> */
  );
}
