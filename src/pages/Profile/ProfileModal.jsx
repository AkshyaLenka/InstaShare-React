import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { Avatar, IconButton, TextField } from "@mui/material";
import { useDispatch } from "react-redux"; // Import useDispatch
import { updateProfileAction } from "../../Redux/Auth/auth.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  outline: "none",
  overflowY: "scroll",
  borderRadius: 3,
};

export default function ProfileModal({ open, handleClose }) {
  const dispatch = useDispatch(); // Initialize useDispatch

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastname: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(updateProfileAction(values)); // Dispatch the action instead of dispatchEvent
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" alignItems="center">
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              <Typography variant="h6">Edit Profile</Typography>
            </Box>
            <Button type="submit">Save</Button>
          </Box>
          <Box mt={2}>
            <Box height="15rem">
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px 8px 0 0",
                }}
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                alt=""
              />
            </Box>
            <Box mt={-8} display="flex" justifyContent="center">
              <Avatar
                sx={{ width: "10rem", height: "10rem" }}
                src="https://cdn.pixabay.com/photo/2024/09/25/14/32/lighthouse-9073925_1280.png"
              />
            </Box>
            <Box mt={4} display="flex" flexDirection="column" gap={2}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                id="lastname"
                name="lastname"
                label="Last Name"
                value={formik.values.lastname}
                onChange={formik.handleChange}
              />
            </Box>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}
