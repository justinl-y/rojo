// const { sum, min, max } = require('./maths');

/*const doMath = (a, b, c) => {
  return sum(a, b, c) - min(c, b) + max(a, b);
};

module.exports = doMath*/

const { rojoThinks } = require('./rojo-thinks');

const rojoSays = (question) => {

  // return rojoThinks(question);

  const startWithWhen = /when.*/i;
  const startWithWhat = /what.*/i;
  const containsTime = /.+time.*/i;
  const containsDay = /.+day.*/i;

  if (startWithWhen.test(question)) {
    return '4:30pm';
  }

  if (startWithWhat.test(question)) {
    if (containsTime.test(question)) {
      return '4:30pm';
    } else {
      return 'Tuesday';
    }
  }

  return '4:30pm, amigo!';

};

module.exports = rojoSays;