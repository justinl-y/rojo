const rojoSays = require('../lib/rojo-says');

describe('rojoSays', () => {
  let test;

  // test for no error on no parameters
  describe('when I pass in zero parameters', () => {
    it('should throw error', () => {
      expect(() => rojoSays()).toThrow('Must have at least one parameter.');
    });
  });

  describe('when valid values are passed', () => {
    beforeEach(() => {
      /*jest.mock('../lib/maths', () => ({
        sum: jest.fn(() => 10),
        min: jest.fn(() => 2),
        max: jest.fn(() => 7)
      }));*/

      test = {};
      test.subject = require('../lib/rojo-says');
      test.rojoThinks = require('../lib/rojo-thinks');
    });

    /*it('should do return a string', () => {
      expect(test.subject()).toEqual('An answer to your question amigo.');
    });*/

    /*it('should pass correct params to rojoThinks', () => {
      test.subject('What is the time Rojo?');
      expect(test.rojThinks.rojoThinks).toHaveBeenCalledWith('What is the time Rojo?');
    });*/
  });
});