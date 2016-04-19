import {expect} from 'chai';

import * as actions from '../src/actions';
import * as types from '../src/types';

describe('actions', () => {

  describe('showMessage', () => {
    it('returns an action with the expected values', () => {
      const msg = 'this is the message';
      const lifetime = 1000;
      const action = actions.showMessage(msg, lifetime);
      expect(action.type).to.equal(types.SHOW_MESSAGE);
      expect(action.message).to.equal(msg);
      expect(action.lifetime).to.equal(lifetime);
    });
  });

  describe('addMessage', () => {
    it('returns an action with the expected values', () => {
      const msg = 'test message';
      const id = 17;
      const action = actions.addMessage(msg, id);
      expect(action.type).to.equal(types.ADD_MESSAGE);
      expect(action.message).to.equal(msg);
      expect(action.id).to.equal(id);
    });
  });

  describe('removeMessage', () => {
    it('returns an action with the expected values', () => {
      const id = 4;
      const action = actions.removeMessage(id);
      expect(action.type).to.equal(types.REMOVE_MESSAGE);
      expect(action.id).to.equal(id);
    });
  });
});
