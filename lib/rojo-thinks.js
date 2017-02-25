/* const max = (...nums) => {
  if (!nums.length) {
    throw 'Must have at least one parameter';
  }

  return nums.sort()[nums.length - 1];
}

module.exports = {
  max,
};*/

const rojoThinks = (question) => {
  /*if (!question) {
    throw 'Must have at least one parameter';
  };

  const answer = '4:30pm, amigo!';

  return answer;*/

  const startWithWhen = /when.*/i;
  const startWithWhat = /what.*/i;
  const containsTime = /.+time.*/i;
  const containsDay = /.+day.*/i;

  const containsAge = /.+age.*/i;

  if (startWithWhen.test(question)) {
    return '4:30pm';
  }

  if (startWithWhat.test(question)) {
    if (containsTime.test(question)) {
      return '4:30pm';
    } else if (containsAge(question)) {
      return '18';
    } else {
      return 'Tuesday';
    }
  }

  return '4:30pm, amigo!';
};

module.exports = {
  rojoThinks
};