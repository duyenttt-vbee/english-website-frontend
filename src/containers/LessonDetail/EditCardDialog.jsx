import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { DialogTitle, DialogContent, Grid } from '@mui/material';
import {
  StyledEditDialog,
  StyledDialogActions,
  StyledEditButton,
  StyledTextField,
} from './index.style';
import { updateCard } from '../../apis/card';

const DialogEditCard = ({
  open,
  onClose,
  selectedCard,
  lessonId,
  fetchCards,
}) => {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [desc, setDesc] = useState('');

  const { enqueueSnackbar } = useSnackbar();

  const handleNameChange = (e) => setName(e.target.value);

  const handleImageURLChange = (e) => setImageURL(e.target.value);

  const handleDescChange = (e) => setDesc(e.target.value);

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!name && !imageURL && !desc) {
      onClose();
      return;
    }
    const response = await updateCard({
      cardId: selectedCard.id,
      name,
      imageURL,
      desc,
    });
    if (response.status === 0) {
      enqueueSnackbar(response.message, { variant: 'error' });
    }
    fetchCards(lessonId);
    onClose();
  };

  useEffect(() => {
    if (selectedCard) {
      setName(selectedCard.name);
      setImageURL(selectedCard.imageUrl);
      setDesc(selectedCard.desc);
    }
  }, [selectedCard]);

  return (
    <StyledEditDialog open={open} onClose={onClose}>
      <DialogTitle>Edit Card</DialogTitle>
      <br />
      <DialogContent>
        <form onSubmit={handleEdit}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <StyledTextField
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
                className="customTextField"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                type="text"
                placeholder="Image URL"
                value={imageURL}
                onChange={handleImageURLChange}
                className="customTextField"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                type="text"
                placeholder="Description"
                value={desc}
                onChange={handleDescChange}
                className="customTextField"
              />
            </Grid>
          </Grid>
          <br />
          <StyledDialogActions className="customDialogActions">
            <StyledEditButton onClick={onClose} className="customButton">
              Cancel
            </StyledEditButton>
            <StyledEditButton
              type="submit"
              variant="contained"
              className="customButton"
            >
              Edit
            </StyledEditButton>
          </StyledDialogActions>
        </form>
      </DialogContent>
    </StyledEditDialog>
  );
};

export default DialogEditCard;
