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
  domString += '<div class="buttonRow">';
  domString += baseDom.createButton('runButton', '<h4>Run Away</h4><i class="fas fa-5x fa-running"></i>');
  domString += baseDom.createButton('fightButton', '<h4>Fight</h4><i class="fas fa-5x fa-hand-rock"></i>');
  domString += '</div>';

  utils.printToDom('#fight', domString);
};

export default {
  addButtonListeners,
  buildBaseDomString,
  getStrengthScore,
};
