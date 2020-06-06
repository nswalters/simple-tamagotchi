const full = 100;

const eatObj = {
  mainDivId: '#eat',
  headerId: 'eatHeader',
  headerText: 'Eat',
  scoreId: 'fullnessScore',
  score: full,
  btnOneId: 'healthyButton',
  btnOneHeader: 'Healthy',
  btnOneIconClass: 'fas fa-5x fa-apple-alt',
  btnTwoId: 'unhealthyButton',
  btnTwoHeader: 'Unhealthy',
  btnTwoIconClass: 'fas fa-5x fa-cookie',
  HEALTHY_FOOD_INCREMENT: 10,
  UNHEALTHY_FOOD_INCREMENT: -3,
};

// Exported
const getEatObj = () => eatObj;
const getScore = () => eatObj.score;

const setScore = (increment) => {
  if ((eatObj.score + increment > 100)) {
    eatObj.score = 100;
  } else {
    eatObj.score += increment;
  }
};

export default {
  getEatObj,
  getScore,
  setScore,
};
