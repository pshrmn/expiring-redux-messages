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
  sendMessage(message, 10000)
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
