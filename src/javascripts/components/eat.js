// The Eat component should appear in the upper left quadrant. It should have a private variable called full. This variable should be set to 100 on page load. This module should have 2 buttons. One should be a healthy food that adds 10 to full when pressed. The other button should be an unhealthy food that subtracts 3 from full when pushed.

// The quadrant should display the name, fullness score, and the two buttons. Each time a button is clicked the quadrant should be re-drawn to show the correct fullness score. The Full score should NEVER be larger than 100.

import utils from '../helpers/utils';

let full = 100;

const getFull = () => full;

const setFull = (increment) => {
  full += increment;
};

const printFullnessScore = () => {
  const domString = `
  <h2>${full}</h2>
  `;
  return domString;
};

const printEatButtons = () => {
  const domString = `
  <button id="healthyButton">Healthy Food</button>
  <button id="unhealthyButton">Unhealthy Food</button>
  `;

  return domString;
};

const buildDomString = () => {
  let domString = '';
  domString += printFullnessScore();
  domString += printEatButtons();

  utils.printToDom('#eat', domString);
};

export default {
  getFull,
  setFull,
  buildDomString,
};
