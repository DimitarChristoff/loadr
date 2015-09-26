import loadr from '../../src/loadr';

describe('loadr', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(loadr, 'greet');
      loadr.greet();
    });

    it('should have been run once', () => {
      expect(loadr.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(loadr.greet).to.have.always.returned('hello');
    });
  });
});
