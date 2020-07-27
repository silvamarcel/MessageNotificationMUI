import React from 'react'
import { MessageNotification, MessageProvider } from 'message-notification-mui'
import Buttons from './Buttons';

const App = () => {
  return (
    <MessageProvider>
      <div>
        <Buttons />
      </div>
      <MessageNotification />
    </MessageProvider>
  );
}

export default App
