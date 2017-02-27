describe('rojoThinks', () => {
  let test;

  describe('when valid values are passed', () => {
    beforeEach(() => {

      test = {};
      test.subject = require('../lib/rojo-says');
    });

    it.skip('should return an string answer', () => {
      expect(test.subject()).toEqual('Not a question amigo!');
    });
    
    describe('.listen', () => {
      // when
      describe('when passed string that starts with "when"', () => {
        describe('when the string also contains "time"', () => {
          it('should return a string containing am or pm', () => {
            const timeRegex = /.+am|pm.*/i;
            const testString = 'When during the day are you free?';
            const output = test.subject(testString);
            const result = timeRegex.test(output);

            expect(result).toBe(true);
          });
        });
      }); //end when

      // what
      describe('when passed a string that starts with "what"', () => {
        describe('when the string also contains "time"', () => {
          it('should return a string containing am or pm', () => {
            const timeRegex = /.+am|pm.*/i;
            const testString = 'What time are you coming home?';
            const result = timeRegex.test(test.subject(testString));

            expect(result).toBe(true);
          });
        });

        describe('when the string also contains "age"', () => {
          it('should return a string containing an age', () => {
            const ageRegex = /^\d{1,2}$/;
            const testString = 'What age are you?';
            const result = ageRegex.test(test.subject(testString));

            expect(result).toBe(true);
          });
        });

        describe('when the string also contains "day"', () => {
          it('should return a string containing a day of the week', () => {
            const dayRegex = /.*monday|tuesday|wednesday|thursday|friday|saturday|sunday.*/i;
            const testString = 'What day are you coming home?';
            const result = dayRegex.test(test.subject(testString));

            expect(result).toBe(true);
          });
        });
        
        describe('when the string does not contain an answerable "what" question', () => {
          it('should return a string of what?', () => {
            const whatRegex = /.*what*/i;
            const testString = 'What colour are you?';
            const result = whatRegex.test(test.subject(testString));

            expect(result).toBe(true);
          });
        });
     }); // end what

      // where
      describe('when passed a string that starts with "where"', () => {
        describe('when the string also contains "my"', () => {
          it('should return a string of a location name?', () => {
            const placeRegex = /.*bed|fridge|sofa|table*/i;
            const testString = 'Where are my keys?';
            const result = placeRegex.test(test.subject(testString));

            expect(result).toBe(true);
          });
        });

        describe('when the string does not contain an answerable "where" question', () => {
          it('should return a string of where?', () => {
            const whereRegex = /.*where*/i;
            const testString = 'Where is?';
            const result = whereRegex.test(test.subject(testString));

            expect(result).toBe(true);
          });
        });
      }); // end where

      // which
      describe('when passed a string that starts with "which"', () => {
        describe('when the string also contains "country"', () => {
          it('should return a string of a country name?', () => {
            const countryRegex = /.*Mexico|Brazil|France|Italy|Spain*/i;
            const testString = 'Which country shall we go to?';
            const result = countryRegex.test(test.subject(testString));

            expect(result).toBe(true);
          });
        });

        describe('when the string also contains "city"', () => {
          it('should return a string of a city name?', () => {
            const cityRegex = /.*London|Seattle|Paris|Rome|New York*/i;
            const testString = 'Which city shall we go to?';
            const result = cityRegex.test(test.subject(testString));

            expect(result).toBe(true);
          });
        });

        describe('when the string does not contain an answerable "which" question', () => {
          it('should return a string of which?', () => {
            const whichRegex = /.*which*/i;
            const testString = 'Which is?';
            const result = whichRegex.test(test.subject(testString));

            expect(result).toBe(true);
          });
        });
      }); // end which

    });
  });
});
