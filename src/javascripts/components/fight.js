import utils from '../helpers/utils';
import baseDom from './baseQuadDom';

let strength = 100;
const RUN_INCREMENT = 1;
const FIGHT_INCREMENT = -10;

// Exported
const getStrengthScore = () => strength;

const setStrengthScore = (increment) => {
  if ((strength + increment > 100)) {
    strength = 100;
  } else {
    strength += increment;
  }
};

const runAway = () => {
  setStrengthScore(RUN_INCREMENT);
  utils.printToDom('#strengthScore', strength);
};

const fight = () => {
  setStrengthScore(FIGHT_INCREMENT);
  utils.printToDom('#strengthScore', strength);
};

// Basic Eat-quadrant DOM Update Functions (exported)

const addButtonListeners = () => {
  $('#runButton').click(runAway);
  $('#fightButton').click(fight);
};

const buildBaseDomString = () => {
  let domString = '';
  domString += baseDom.createHeader('fightHeader', 'Fight');
  domString += baseDom.createScore('strengthScore', getStrengthScore());
  domString += baseDom.createButton('runButton', 'RUN!');
  domString += baseDom.createButton('fightButton', 'FIGHT!');

  utils.printToDom('#fight', domString);
};

export default {
  addButtonListeners,
  buildBaseDomString,
  getStrengthScore,
};
