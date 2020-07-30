# message-notification-mui

> Message notification component using Material-UI

[![NPM](https://img.shields.io/npm/v/@dhouse.in/message-notification-mui)](https://www.npmjs.com/package/@dhouse.in/message-notification-mui)
[![CodeFactor](https://www.codefactor.io/repository/github/silvamarcel/messagenotificationmui/badge?style=flat)](https://www.codefactor.io/repository/github/silvamarcel/messagenotificationmui)
![SemaphoreCI](https://libs.semaphoreci.com/badges/MessageNotificationMUI.svg)
[![codecov](https://codecov.io/gh/silvamarcel/MessageNotificationMUI/branch/master/graph/badge.svg)](https://codecov.io/gh/silvamarcel/MessageNotificationMUI)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/github/license/silvamarcel/MessageNotificationMUI)](https://github.com/silvamarcel/MessageNotificationMUI/blob/master/LICENSE)


## Install
```bash
npm install --save @dhouse.in/message-notification-mui
```

## Usage
It is divided in two steps:

##### Step 1: Wrap the application with the provider
```jsx
import React from 'react'
import { MessageNotification, MessageProvider } from '@dhouse.in/message-notification-mui'
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
import { useMessageNotification } from '@dhouse.in/message-notification-mui'

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
