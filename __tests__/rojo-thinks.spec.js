/* const max = require('../lib/maths.js').max;

describe('max', () => {
  // test for no error on no parameters
  describe('when I pass in zero parameters', () => {
    it('should throw error', () => {
      expect(() => max()).toThrow('Must have at least one parameter');
    });
  });

  // test to return larger of two parameters
  describe('when I pass in two parameters', () => {
    it('should return the larger of the two values', () => {
      const result = max(2, 3);
      expect(result).toEqual(3);
    });
  });
}); */

const rojoThinks = require('../lib/rojo-thinks.js').rojoThinks;

/*describe('rojoThinks', () => {
  // test for no error on no parameters
  describe('when I pass in zero parameters', () => {
    it('should throw error', () => {
      expect(() => rojoThinks()).toThrow('Must have at least one parameter');
    });
  });
});*/

describe('rojoThinks', () => {
  let test;

  describe('when valid values are passed', () => {
    beforeEach(() => {

      test = {};
      test.subject = require('../lib/rojo-says');
      test.rojoThinks = require('../lib/rojo-thinks');
    });

    it('should return an string answer', () => {
      expect(test.subject()).toEqual('4:30pm, amigo!');
    });
    
    describe('.listen', () => {
      describe('when passed string that starts with "when"', () => {
        it('should return a string containing am or pm', () => {
          const timeRegex = /.+am|pm.*/i;
          const testString = 'When are you coming home?';
          const output = test.subject(testString);
          const result = timeRegex.test(output);

          expect(result).toBe(true);
        });
      });

      describe('when passed a string that starts with "what"', () => {
        describe('when the string contains "time"', () => {
          it('should return a string containing am or pm', () => {
            const timeRegex = /.+am|pm.*/i;
            const testString = 'What time are you coming home?';
            const result = timeRegex.test(test.subject(testString));

            expect(result).toBe(true);
          });
        });

        describe('when the string contains "age"', () => {
          it('should return a string containing an age', () => {
            const ageRegex = /.+18/i;
            const testString = 'What age are you?';
            const result = ageRegex.test(test.subject(testString));

            expect(result).toBe(true);
          });
        });

        describe('when the string does not contain "time"', () => {
          describe('when the string also contains "day"', () => {
            it('should return a string cotaining a day of the week', () => {
              const dayRegex = /.*monday|tuesday|wednesday|thursday|friday|saturday|sunday.*/i;
              const testString = 'What day are you coming home?';
              const result = dayRegex.test(test.subject(testString));

              expect(result).toBe(true);
            });
          });
        });
      });
    });
  });
}); 
