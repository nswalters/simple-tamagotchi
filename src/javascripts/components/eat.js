import utils from '../helpers/utils';

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

const createNameHeader = () => {
  const domString = `
    <h2 id='eatHeader'>Eat</h2>
  `;
  return domString;
};

const createFullnessScore = (fullScore) => {
  const domString = `
  <h3 id='fullnessScore'>${fullScore}</h3>
  `;
  return domString;
};

const createEatButtons = () => {
  const domString = `
  <button id="healthyButton">Healthy Food</button>
  <button id="unhealthyButton">Unhealthy Food</button>
  `;

  return domString;
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
  domString += createNameHeader();
  domString += createFullnessScore(getFullScore());
  domString += createEatButtons();

  utils.printToDom('#eat', domString);
};

export default {
  addButtonListeners,
  buildBaseDomString,
  getFullScore,
};
