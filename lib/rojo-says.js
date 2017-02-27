const rojoThinks = require('./rojo-thinks');

const rojoSays = (question) => {
  if (!question) {
    throw 'Must have at least one parameter.';
  };

  return rojoThinks(question);
};

module.exports = rojoSays;
