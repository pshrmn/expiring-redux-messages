import {expect} from 'chai';

import * as actions from '../src/actions';
import * as types from '../src/types';

describe('actions', () => {

  describe('showMessage', () => {
    it('returns an action with the expected values', () => {
      const msg = 'this is the message';
      const lifetime = 1000;
      const rating = 1;
      const action = actions.showMessage(msg, lifetime, rating);
      expect(action.type).to.equal(types.SHOW_MESSAGE);
      expect(action.message).to.equal(msg);
      expect(action.lifetime).to.equal(lifetime);
      expect(action.rating).to.equal(rating);
    });

    it('defaults rating to 0 when not provided', () => {
      const msg = 'this is also the message';
      const lifetime = 500;
      const action = actions.showMessage(msg, lifetime);
      expect(action.rating).to.equal(0);
    });
  });

  describe('addMessage', () => {
    it('returns an action with the expected values', () => {
      const msg = 'test message';
      const id = 17;
      const rating = -1;
      const action = actions.addMessage(msg, id, rating);
      expect(action.type).to.equal(types.ADD_MESSAGE);
      expect(action.message).to.equal(msg);
      expect(action.id).to.equal(id);
      expect(action.rating).to.equal(rating);
    });

    it('defaults rating to 0 when not provided', () => {
      const msg = 'this is also the message';
      const id = 218;
      const action = actions.addMessage(msg, id);
      expect(action.rating).to.equal(0);
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
