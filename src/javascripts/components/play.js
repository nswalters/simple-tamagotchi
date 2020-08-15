const fun = 50;

const funObj = {
  mainDivId: '#play',
  headerId: 'playHeader',
  headerText: 'Play',
  scoreId: 'funScore',
  score: fun,
  btnOneId: 'funButton',
  btnOneHeader: 'Super Fun',
  btnOneIconClass: 'fas fa-3x fa-grin-beam',
  btnTwoId: 'slightlyFunButton',
  btnTwoHeader: 'Slightly Fun',
  btnTwoIconClass: 'fas fa-3x fa-smile',
  SUPER_FUN_INCREMENT: 10,
  SLIGHTLY_FUN_INCREMENT: -2,
};

// Exported
const getFunObj = () => funObj;
const getScore = () => funObj.score;

const setScore = (increment) => {
  if ((funObj.score + increment > 100)) {
    funObj.score = 100;
  } else {
    funObj.score += increment;
  }
};

export default {
  getFunObj,
  getScore,
  setScore,
};
