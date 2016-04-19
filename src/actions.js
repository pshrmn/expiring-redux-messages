import {
  SHOW_MESSAGE,
  ADD_MESSAGE,
  REMOVE_MESSAGE
} from './types';

export function showMessage(message, lifetime) {
  return {
    type: SHOW_MESSAGE,
    message,
    lifetime
  };
}

export function addMessage(message, id) {
  return {
    type: ADD_MESSAGE,
    message,
    id
  };
}

export function removeMessage(id) {
  return {
    type: REMOVE_MESSAGE,
    id
  };
}
