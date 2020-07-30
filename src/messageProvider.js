import React, { createContext, useState, useCallback } from 'react';

export const MessageContext = createContext({
  message: null,
  addMessage: null,
  removeMessage: null
});

const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const removeMessage = () => {
    setMessage(null);
  };

  const addMessage = (title, text, type, duration) => {
    setMessage({ title, text, type, duration });
  };

  const contextValue = {
    message,
    addMessage: useCallback(
      (title, text, type, duration) => addMessage(title, text, type, duration),
      []
    ),
    removeMessage: useCallback(() => removeMessage(), [])
  };

  return (
    <MessageContext.Provider value={contextValue}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
