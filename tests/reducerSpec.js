import {expect} from 'chai';

import messages from '../src/reducer';
import * as types from '../src/types';
import { pseudoRandomID } from '../src/helpers';

describe('messages reducer', () => {
  describe('unknown', () => {
    it('returns default for unknown action types', () => {
      const state = [];
      const action = {
        type: 'UNKNOWN_ACTION_TYPE'
      };
      const newState = messages(state, action);
      expect(newState).to.deep.equal(state);
    });
  });

  // SHOW_MESSAGE shouldn't reach the reducer (caught by middleware)

  describe('ADD_MESSAGE', () => {
    it('adds the message to the message array', () => {
      const state = [];
      const msg = 'test message';
      const id = 7;
      const newState = messages(state, {
        type: types.ADD_MESSAGE,
        message: msg,
        id: id
      });
      expect(newState.length).to.equal(1);
      const first = newState[0];
      expect(first.id).to.equal(id);
      expect(first.message).to.equal(msg);
    });
  });

  describe('REMOVE_MESSAGE', () => {
    it('returns messages array with matched message removed', () => {
      const state = [
        {id: 'abcdefghij', message: 'first message'},
        {id: '1234567890', message: 'second message'}
      ];
      expect(state.length).to.equal(2)
      const newState = messages(state, {
        type: types.REMOVE_MESSAGE,
        id: 'abcdefghij'
      });
      expect(newState.length).to.equal(1)
    });

    it('does nothing when no messages match the id', () => {
      const state = [
        {id: 'abcdefghij', message: 'first message'},
        {id: '1234567890', message: 'second message'}
      ];
      expect(state.length).to.equal(2)
      const newState = messages(state, {
        type: types.REMOVE_MESSAGE,
        id: 'zyxwvutsrq'
      });
      expect(newState.length).to.equal(2)
    });
  })
});
