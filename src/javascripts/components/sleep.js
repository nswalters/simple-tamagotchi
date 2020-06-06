const energy = 10;

const sleepObj = {
  mainDivId: '#sleep',
  headerId: 'sleepHeader',
  headerText: 'Sleep',
  scoreId: 'energyScore',
  score: energy,
  btnOneId: 'napButton',
  btnOneHeader: 'Nap',
  btnOneIconClass: 'fas fa-5x fa-tired',
  btnTwoId: 'slumberButton',
  btnTwoHeader: 'Slumber',
  btnTwoIconClass: 'fas fa-5x fa-bed',
  NAP_INCREMENT: 50,
  SLUMBER_INCREMENT: 60,
};

// Exported
const getSleepObj = () => sleepObj;
const getScore = () => sleepObj.score;

const setScore = (increment) => {
  if ((sleepObj.score + increment > 100)) {
    sleepObj.score = 100;
  } else {
    sleepObj.score += increment;
  }
};

export default {
  getSleepObj,
  getScore,
  setScore,
};
