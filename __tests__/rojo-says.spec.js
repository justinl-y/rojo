const rojoSays = require('../lib/rojo-says');

describe('rojoSays', () => {
  // test for no error with no parameters
  describe('when I pass in zero parameters', () => {
    it('should throw error', () => {
      expect(() => rojoSays()).toThrow('Must have at least one parameter.');
    });
  });

  let test;

  // test for valid return
  describe('when valid values are passed', () => {
    beforeEach(() => {
      jest.mock('../lib/rojo-thinks', () => ({
        rojoThinks: jest.fn(() => 'An answer to your question amigo.'),
        // min: jest.fn(() => 2),
        // max: jest.fn(() => 7)
      }));

      test = {};
      test.subject = require('../lib/rojo-says');
      test.rojoThinks = require('../lib/rojo-thinks');
    });

    it('should return a string', () => {
      expect(test.subject('What is the time rojo?')).toEqual('4:30pm');
    });

    it.skip('should pass correct params to rojoThinks', () => {
      test.subject('string');
      expect(test.rojoThinks).toHaveBeenCalledWith('string');
    });
  });
});