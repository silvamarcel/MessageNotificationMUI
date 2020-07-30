import React from 'react';
import { useMessageNotification } from '@dhouse.in/message-notification-mui'

const Buttons = () => {
  const { addMessage } = useMessageNotification();

  const showMessage = (type) => {
    const title = `${type.toUpperCase()} Message`;
    const text = `My ${type} message`;
    const duration = 3000;
    addMessage(title, text, type, duration);
  }

  const showInfoMessage = () => {
    showMessage('info');
  };
  const showWarningMessage = () => {
    showMessage('warning');
  };
  const showSuccessMessage = () => {
    showMessage('success');
  };
  const showErrorMessage = () => {
    showMessage('error');
  };

  return (
    <div>
      <button onClick={showInfoMessage}>Show Info Message</button>
      <button onClick={showWarningMessage}>Show Warning Message</button>
      <button onClick={showSuccessMessage}>Show Success Message</button>
      <button onClick={showErrorMessage}>Show Error Message</button>
    </div>
  );
}

export default Buttons
