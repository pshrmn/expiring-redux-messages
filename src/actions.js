import {
  SHOW_MESSAGE,
  ADD_MESSAGE,
  REMOVE_MESSAGE
} from './types';

export function showMessage(message, lifetime, rating = 0) {
  return {
    type: SHOW_MESSAGE,
    message,
    lifetime,
    rating
  };
}

export function addMessage(message, id, rating = 0) {
  return {
    type: ADD_MESSAGE,
    message,
    id,
    rating
  };
}

export function removeMessage(id) {
  return {
    type: REMOVE_MESSAGE,
    id
  };
}
