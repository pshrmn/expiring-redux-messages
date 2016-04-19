import { SHOW_MESSAGE } from './types'
import { addMessage, removeMessage } from './actions';
import { pseudoRandomID } from './helpers';

/*
 * the message middleware intercepts messages before they reach
 * the reducer. A new action will be dispatched for the message
 * with a unique ID. After the wait time, another action will
 * be dispatched to delete the message with the given ID.
 */
export default store => next => action => {
  if ( action.type !== SHOW_MESSAGE ) {
    return next(action);
  }
  const { message, lifetime } = action;
  const id = pseudoRandomID();
 
  setTimeout(() => {
    store.dispatch(
      removeMessage(id)
    )
  }, lifetime);

  return store.dispatch(
    addMessage(message, id)
  );
}
