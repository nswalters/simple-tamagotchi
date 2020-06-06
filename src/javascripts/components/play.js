import utils from '../helpers/utils';
import baseDom from './baseQuadDom';

let fun = 50;
const SUPER_FUN_INCREMENT = 50;
const SLIGHTLY_FUN_INCREMENT = 2;

// Exported
const getFunScore = () => fun;

const setFunScore = (increment) => {
  if ((fun + increment > 100)) {
    fun = 100;
  } else {
    fun += increment;
  }
};

const addSuperFun = () => {
  setFunScore(SUPER_FUN_INCREMENT);
  utils.printToDom('#funScore', fun);
};

const addSlightlyFun = () => {
  setFunScore(SLIGHTLY_FUN_INCREMENT);
  utils.printToDom('#funScore', fun);
};

// Basic Eat-quadrant DOM Update Functions (exported)

const addButtonListeners = () => {
  $('#funButton').click(addSuperFun);
  $('#slightlyFunButton').click(addSlightlyFun);
};

const buildBaseDomString = () => {
  let domString = '';
  domString += baseDom.createHeader('playHeader', 'Play');
  domString += baseDom.createScore('funScore', getFunScore());
  domString += baseDom.createButton('funButton', 'FUN! FUN!');
  domString += baseDom.createButton('slightlyFunButton', 'Slightly Fun');

  utils.printToDom('#play', domString);
};

export default {
  addButtonListeners,
  buildBaseDomString,
  getFunScore,
};
