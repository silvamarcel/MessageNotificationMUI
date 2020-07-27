# message-notification-mui

> Message notification component using Material-UI

[![NPM](https://img.shields.io/npm/v/@dhouse.in/message-notification-mui)](https://www.npmjs.com/package/@dhouse.in/message-notification-mui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen)](https://standardjs.com)

## Install

```bash
npm install --save message-notification-mui
```

## Usage
It is divided in two steps:

##### Step 1: Wrap the application with the provider
```jsx
import React from 'react'
import { MessageNotification, MessageProvider } from 'message-notification-mui'
import MyApplication from '.'

const App = () => {
  return (
    <MessageProvider>
      <div>
        <MyApplication />
      </div>
      <MessageNotification />
    </MessageProvider>
  );
}

export default App
```

##### Step 2: Use the hook `useMessageNotification` to set and show the message
```jsx
import React from 'react'
import { useMessageNotification } from 'message-notification-mui'

const MyApplication = () => {
  const { addMessage } = useMessageNotification();

  const showInfoMessage = () => {
    const title = 'Info Message';
    const text = 'My info message';
    addMessage(title, text, 'info');
  };

  return (
    <div>
      <button onClick={showInfoMessage}>Show Info Message</button>
    </div>
  );
}

export default MyApplication
```

## License

MIT © [Marcel Silva](https://github.com/silvamarcel)
