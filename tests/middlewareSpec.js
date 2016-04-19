import { expect } from 'chai';
import configureStore from 'redux-mock-store';

import * as types from '../src/types';
import { showMessage } from '../src/actions';
import messageMiddleware from '../src/middleware';

const mockStore = configureStore([messageMiddleware]);

describe('message middleware', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  describe('unknown', () => {
    it('does nothing for unexpected action types', () => {
      store.dispatch({
        type: 'UNKNOWN_ACTION_TYPE'
      });
      const [first, ...rest] = store.getActions();
      expect(first.type).to.equal('UNKNOWN_ACTION_TYPE');
    });
  });

  describe('SHOW_MESSAGE', () => {
    it('dispatches an ADD_MESSAGE immediately', () => {
      const message = 'this is an example, it is only an example';
      store.dispatch(
        showMessage(message, 500)
      );
      const [first, ...rest] = store.getActions();
      expect(first.type).to.equal(types.ADD_MESSAGE);
      expect(first.message).to.equal(message);
    });

    it('dispatches a REMOVE_MESSAGE after wait time', done => {
      const message = 'this is an example, it is only an example';
      const wait = 15; // something really low
      store.dispatch(
        showMessage(message, wait)
      )
      setTimeout(() => {
        // by now removeMessage should be dispatched
        const [ first, second, ...rest] = store.getActions();
        expect(second.type).to.equal(types.REMOVE_MESSAGE);
        expect(second.id).to.equal(first.id);
        done();
      }, 50)
    });
  });
});
