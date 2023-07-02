import React, { useState, useEffect } from 'react';
import { DialogContent, TextField } from '@mui/material';
import {
  StyledDeleteTypography,
  StyledDeleteDialog,
  StyledTitleDialog,
  StyledDialogActions,
  StyledDeleteButton,
} from './index.style';

const DialogDelete = ({ open, onClose, selectedItem, onDelete }) => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirmedChange = (e) => {
    if (e.target.value === selectedItem.title) {
      setConfirmed(true);
      return;
    }
    setConfirmed(false);
  };

  const handleClose = () => {
    onClose();
    setConfirmed(false);
  };

  useEffect(() => {
    if (open) setConfirmed(false);
  }, [open]);

  return (
    <StyledDeleteDialog open={open} onClose={onClose}>
      <StyledTitleDialog className="title">Delete Lesson</StyledTitleDialog>
      <DialogContent>
        <StyledDeleteTypography className="customTypo">
          To delete the lesson &quot;{selectedItem?.title}&quot;, type the name
          to confirm.
        </StyledDeleteTypography>
        <TextField
          label="Lesson Name"
          onChange={handleConfirmedChange}
          fullWidth
        />
      </DialogContent>
      <StyledDialogActions className="customDialogActions">
        <StyledDeleteButton onClick={handleClose} className="customButton">
          Cancel
        </StyledDeleteButton>
        <StyledDeleteButton
          onClick={onDelete}
          variant="contained"
          className={`customButton deleteButton ${
            !confirmed ? 'disabled' : ''
          }`}
          disabled={!confirmed}
        >
          Delete
        </StyledDeleteButton>
      </StyledDialogActions>
    </StyledDeleteDialog>
  );
};

export default DialogDelete;
