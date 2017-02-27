const rojoThinks = (question) => {
  const startWithWhen = /when.*/i;
  const startWithWhat = /what.*/i;
  const startWithWhere = /where.*/i;
  const startWithWhich = /which.*/i;

  const containsTime = /.+time.*/i;
  const containsAge = /.+age.*/i;
  const containsDay = /.+day.*/i;
  const containsGo = /.+go.*/i;
  const containsMy = /.+my.*/i;
  const containsCountry = /.+country.*/i;
  const containsCity = /.+city.*/i;

  switch (true) {
    // test when
    case startWithWhen.test(question):
      switch (true) {
        // test when
        default:
          return 'Let/s say 12pm.';
      }
    // test what
    case startWithWhat.test(question):
      switch (true) {
        // test what & time
        case containsTime.test(question):
          return '4:30pm as I recall.';
          break;
        // test when and age
        case containsAge.test(question):
          return '35'; //Around 35 I believe
          break;
        // test when and day
        case containsDay.test(question):
          return 'I/m thinking Thursday.';
          break;
        // return what if no question
        default:
          return 'What?';
      }
    // test where
    case startWithWhere.test(question):
      switch (true) {
        // test where and my
        case containsMy.test(question):
          return 'Probably under the bed.';
          break;
        // return where if no question
        default:
          return 'Where?';
      }
    case startWithWhich.test(question):
      switch(true) {
        // test which and country
        case containsCountry.test(question):
          return 'Let/s go to France.';
          break;
        // test which and city
        case containsCity.test(question):
          return 'Let/s go to London.';
          break;
        // return which if no question
        default:
          return 'Which?';
      }
    default:
      // return default if no question
      return 'Not a question amigo!';
  }
};

module.exports = rojoThinks;
