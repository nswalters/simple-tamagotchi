import utils from '../helpers/utils';
import baseDom from './baseQuadDom';

let energy = 50;
const NAP_INCREMENT = 50;
const SLUMBER_INCREMENT = 60;

// Exported
const getEnergyScore = () => energy;

const setEnergyScore = (increment) => {
  if ((energy + increment > 100)) {
    energy = 100;
  } else {
    energy += increment;
  }
};

const napTime = () => {
  setEnergyScore(NAP_INCREMENT);
  utils.printToDom('#energyScore', energy);
};

const slumberTime = () => {
  setEnergyScore(SLUMBER_INCREMENT);
  utils.printToDom('#energyScore', energy);
};

// Basic Eat-quadrant DOM Update Functions (exported)

const addButtonListeners = () => {
  $('#napButton').click(napTime);
  $('#slumberButton').click(slumberTime);
};

const buildBaseDomString = () => {
  let domString = '';
  domString += baseDom.createHeader('sleepHeader', 'Sleep');
  domString += baseDom.createScore('energyScore', getEnergyScore());
  domString += '<div class="buttonRow">';
  domString += baseDom.createButton('napButton', '<h4>Nap</h4><i class="fas fa-5x fa-tired"></i>');
  domString += baseDom.createButton('slumberButton', '<h4>Slumber</h4><i class="fas fa-5x fa-bed"></i>');
  domString += '</div>';

  utils.printToDom('#sleep', domString);
};

export default {
  addButtonListeners,
  buildBaseDomString,
  getEnergyScore,
};
