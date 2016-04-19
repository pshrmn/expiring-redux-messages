import { expect } from 'chai';

import { pseudoRandomID } from '../src/helpers';

describe('helpers', () => {
  describe('pseudoRandomID', () => {
    it('returns a 10 character code', () => {
      const id = pseudoRandomID();
      expect(id.length).to.equal(10);
    });
  });
});
