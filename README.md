#Expiring Redux Messages

Send messages to your reducer that will automatically be removed after a provided amount of time.

###Usage

```javascript
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { sendMessage, messagesMiddleware, messages } from 'expiring-redux-messages';

import baseReducers from './reducers';

const reducers = combineReducers(Object.assign({}, baseReducers, {
  messages
});
const initialState = {
  /*...*/,
  messages: []
};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    messagesMiddleware
  )
);

const message = 'I am a temporary message';
// dispatch a sendMessage action with a 10 second lifetime
store.dispatch(
  sendMessage(message, 10000, 1)
);

let currentMessages = store.getState().messages;
// currentMessages === []

/*
 * When sendMessage is dispatched, the messagesMiddleware intercepts it
 * and dispatches an addMessage action. That will reach the reducer, which
 * will add the message to the messages array
 */
currentMessages = store.getState().messages;
// currentMessages[0].message === message

/*
 * after ~10 seconds, a removeMessage action will be dispatched, removing
 * the message from the messages array
 */
currentMessages = store.getState().messages;
// currentMessages === []
```

##`sendMessage`

`sendMessage` takes three arguments:

1. message (string) - the message that should be displayed
2. lifetime (int) - the number of milliseconds that the message should last for
3. rating (int) - the rating of the message. While not required, a good way to think about the rating is to coincide it with its sign. A rating that is less than 0 is negative, a rating that is greater than 0 is positive, and a rating of 0 is neutral. If you do not provide a rating, it will default to 0.
