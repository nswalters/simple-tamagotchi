import utils from '../helpers/utils';
import baseDom from './baseQuadDom';

let full = 100;
const HEALTHY_FOOD_INCREMENT = 10;
const UNHEALTHY_FOOD_INCREMENT = -3;

// Exported
const getFullScore = () => full;

const setFullScore = (increment) => {
  if ((full + increment > 100)) {
    full = 100;
  } else {
    full += increment;
  }
};

const feedHealthyFood = () => {
  setFullScore(HEALTHY_FOOD_INCREMENT);
  utils.printToDom('#fullnessScore', full);
};

const feedUnhealthyFood = () => {
  setFullScore(UNHEALTHY_FOOD_INCREMENT);
  utils.printToDom('#fullnessScore', full);
};

// Basic Eat-quadrant DOM Update Functions (exported)

const addButtonListeners = () => {
  $('#healthyButton').click(feedHealthyFood);
  $('#unhealthyButton').click(feedUnhealthyFood);
};

const buildBaseDomString = () => {
  let domString = '';
  domString += baseDom.createHeader('eatHeader', 'Eat');
  domString += baseDom.createScore('fullnessScore', getFullScore());
  domString += baseDom.createButton('healthyButton', 'Healthy Food');
  domString += baseDom.createButton('unhealthyButton', 'Unhealthy Food');

  utils.printToDom('#eat', domString);
};

export default {
  addButtonListeners,
  buildBaseDomString,
  getFullScore,
};
