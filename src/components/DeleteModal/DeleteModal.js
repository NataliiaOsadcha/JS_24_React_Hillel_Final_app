import { Modal, Backdrop, Fade, Button } from "@mui/material";
import "./DeleteModal.css";

const DeleteModal = ({ open, handleClose, handleDelete }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className="modal-container">
          <h2>Are you sure you want to delete this product?</h2>
          <div className="modal-buttons">
            <Button onClick={handleClose} variant="outlined" color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              variant="contained"
              color="secondary"
            >
              Delete
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default DeleteModal;
