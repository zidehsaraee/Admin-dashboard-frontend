import React, { useState } from "react";
import "./ProductsTable.css";
import { Box } from "@mui/material";
import EditModal from "../../Components/Modals/EditModal/EditModal";
import DetailesModal from "../../Components/Modals/DetailesModal/DetailesModal";
import DeleteModal from "../../Components/Modals/DeleteModal/DeleteModal";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import DetailsIcon from "@mui/icons-material/Details";
import IconButton from "@mui/material/IconButton";
import TablePagination from "@mui/material/TablePagination";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function createData(ProductImage, name, Price, inStock) {
  return { ProductImage, name, Price, inStock };
}
const rows = [
  createData(
    `process.env.PUBLIC_URL +/images/ProductsImg/Computer-desk.jpg`,
    "Computer desk",
    1240,
    25
  ),
  createData(`process.env.PUBLIC_URL +/images/ProductsImg/hp-laptop.jpg`, "Laptop Hp", 780, 30),
  createData(`process.env.PUBLIC_URL +/images/ProductsImg/hub1.jpg`, "Hub", 24, 118),
  createData(`process.env.PUBLIC_URL +/images/ProductsImg/keyboard.jpg`, "Keyboard", 34, 70),
  createData(`process.env.PUBLIC_URL +/images/ProductsImg/microphone.jpg`, "Microphone", 48, 16),
  createData(`process.env.PUBLIC_URL +/images/ProductsImg/monitor-arm-3.jpg`, "Monitor arm", 25, 11),
  createData(`process.env.PUBLIC_URL +/images/ProductsImg/monitor.jpg`, "Monitor", 370, 100),
  createData(`process.env.PUBLIC_URL +/images/ProductsImg/mouse1.jpg`, "Mouse", 35, 20),
  createData(`process.env.PUBLIC_URL +/images/ProductsImg/mug.jpg`, "Mug", 6, 100),
];

export default function ProductsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleEditModal = () => {
    setShowEditModal(true);
  };
  const handleEditModalClose = () => {
    setShowEditModal(false);
  };

  const handleDetailsModal = () => {
    setShowDetailsModal(true);
  };

  const handleDetailsModalClose = () => {
    setShowDetailsModal(false);
  };

  const handleDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <Divider variant="middle" sx={{ my: "50px" }} />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Product image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>In stock</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <Stack>
                        <Avatar
                          alt="Laptop"
                          src={row.ProductImage}
                          sx={{ width: "70px", height: "70px" }}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>£ {row.Price}</TableCell>
                    <TableCell>{row.inStock}</TableCell>
                    <TableCell>
                      <Stack direction="row" sx={{ gap: "10px" }}>
                        <Tooltip title="Details" arrow>
                          <IconButton
                            sx={{
                              backgroundColor: "#C1D8C3",
                              color: "#1E4620",
                              "&:hover": {
                                backgroundColor: "#1E4620",
                                color: "#C1D8C3",
                              },
                            }}
                            onClick={() => {
                              handleDetailsModal();
                            }}
                          >
                            <DetailsIcon />
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
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <EditModal open={showEditModal} editModalClose={handleEditModalClose}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          Edit Product
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
          <TextField id="outlined-basic" label="title" />
          <TextField id="outlined-basic" label="price" />
          <TextField id="outlined-basic" label="in stack" />
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              margin: "5px 0",
            }}
          >
            <Avatar sx={{ width: "70px", height: "70px" }} />

            <Button
              variant="contained"
              component="label"
              startIcon={<CloudUploadIcon />}
              color="info"
            >
              Change Image
              <input type="file" hidden />
            </Button>
          </Stack>
          <Typography
            variant="h1"
            component="h2"
            sx={{ color: "green", fontSize: "12px" }}
          ></Typography>

          <TextField id="outlined-basic" label="popularity" />
          <TextField id="outlined-basic" label="sale" />
          <TextField id="outlined-basic" label="colors" />
          <Button variant="contained" color="secondary">
            Save changes
          </Button>
        </Box>
      </EditModal>

      <DetailesModal
        open={showDetailsModal}
        detailsModalClose={handleDetailsModalClose}
        children
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ mb: "20px" }}
        >
          Product details
        </Typography>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>popularity</TableCell>
                <TableCell>sale</TableCell>
                <TableCell>color</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell>10</TableCell>
                <TableCell>120</TableCell>
                <TableCell>yellow</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DetailesModal>

      <DeleteModal
        open={showDeleteModal}
        deleteModalClose={handleDeleteModalClose}
        children
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          Are you sure to delete this product?
        </Typography>
      </DeleteModal>
    </>
  );
}
