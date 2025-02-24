import React, { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import useBlogCalls from "../../hooks/useBlogCalls";

const DeleteModal = ({ blogId }) => {
  const [open, setOpen] = useState(false);
  const { deleteBlog } = useBlogCalls();

  const handleDelete = () => {
    deleteBlog(blogId);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={() => setOpen(true)}>
        Delete
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ p: 4, bgcolor: "white", borderRadius: 2, textAlign: "center" }}>
          <Typography variant="h6">Are you sure you want to delete this blog?</Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-around" }}>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Yes, Delete
            </Button>
            <Button variant="contained" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteModal;