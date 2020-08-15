const strength = 100;

const fightObj = {
  mainDivId: '#fight',
  headerId: 'fightHeader',
  headerText: 'Fight',
  scoreId: 'strengthScore',
  score: strength,
  btnOneId: 'runButton',
  btnOneHeader: 'Run Away',
  btnOneIconClass: 'fas fa-3x fa-running',
  btnTwoId: 'fightButton',
  btnTwoHeader: 'Fight',
  btnTwoIconClass: 'fas fa-3x fa-hand-rock',
  RUN_INCREMENT: 1,
  FIGHT_INCREMENT: -10,
};

// Exported
const getFightObj = () => fightObj;
const getScore = () => fightObj.score;

const setScore = (increment) => {
  if ((fightObj.score + increment > 100)) {
    fightObj.score = 100;
  } else {
    fightObj.score += increment;
  }
};

export default {
  getFightObj,
  getScore,
  setScore,
};
