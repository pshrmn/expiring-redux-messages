import {
  ADD_MESSAGE,
  REMOVE_MESSAGE
} from './types';

/*
 * messages contains an array of message objects
 * a message object has two properties:
 *   message - the text of the message
 *   id - a unique identifier for the message
 */
export default function messages(state = [], action) {
  switch ( action.type ) {
  case ADD_MESSAGE:
    return state.concat([
      {
        id: action.id,
        message: action.message
      }
    ]);
  case REMOVE_MESSAGE:
    return state.filter(m => m.id !== action.id);
  default:
    return state;
  }
}
