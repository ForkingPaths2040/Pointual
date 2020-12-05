import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Infraction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If an employee has been tardy or absent, fill out the corresponding fields to track their infraction. Points are attached to each infraction allowing for a user to identify when an employee has breached the time and attendance policy.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="attendance"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="date"
            type="date"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="points"
            type=""
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="reason"
            type="textarea"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
