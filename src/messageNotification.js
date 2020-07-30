import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import useMessageNotification from './useMessageNotification';

const MessageNotification = () => {
  const { message, removeMessage } = useMessageNotification();
  const { title, text, type, duration } = message || {
    title: '',
    text: '',
    type: 'info',
    duration: 6000
  };

  const handleClose = () => {
    removeMessage();
  };

  const snackbarPosition = {
    vertical: 'top',
    horizontal: 'center'
  };

  const Message = () => {
    if (!message) {
      return <div />;
    } else {
      return (
        <Alert onClose={handleClose} severity={type}>
          <AlertTitle>{title}</AlertTitle>
          {text}
        </Alert>
      );
    }
  };

  return (
    <Snackbar
      open={!!message}
      autoHideDuration={duration}
      onClose={handleClose}
      anchorOrigin={snackbarPosition}
    >
      <Message />
    </Snackbar>
  );
};

export default MessageNotification;
