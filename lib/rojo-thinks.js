const rojoThinks = (question) => {
  // what, when, where, how, should, could, would

  const startWithWhen = /when.*/i;
  const startWithWhat = /what.*/i;
  const containsTime = /.+time.*/i;
  const containsAge = /.+age.*/i;
  const containsDay = /.+day.*/i;
  const startWithWhere = /where.*/i;

  if (startWithWhen.test(question)) {
    // test when
    return '4:30pm';
  } else if (startWithWhat.test(question)) {
    // test what
    if (containsTime.test(question)) {
      // test what & time
      return '4:30pm';
    } else if (containsAge.test(question)) {
      // test when and age
      return '35';
    } else if (containsDay.test(question)) {
      // test when and day
      return 'Thursday';
    } else {
      // return what if no question
      return 'What?';
    }
  } else if (startWithWhere.test(question)) {
    // test where
    return 'Where?';
  } else {
    return 'Not a question amigo!';
  }
};

module.exports = {
  rojoThinks
};