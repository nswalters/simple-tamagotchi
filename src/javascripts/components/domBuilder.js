import utils from '../helpers/utils';
import eat from './eat';
import fight from './fight';
import play from './play';
import sleep from './sleep';
import progress from './listeners';

const quadArray = [];

const quadArrayBuilder = () => {
  quadArray.push(eat.getEatObj());
  quadArray.push(play.getFunObj());
  quadArray.push(fight.getFightObj());
  quadArray.push(sleep.getSleepObj());
};

const buildDom = () => {
  quadArrayBuilder();
  quadArray.forEach((quad) => {
    let domString = '';

    domString += `<h1 id='${quad.headerId}'>${quad.headerText}</h1>`;
    domString += `<h3 id='${quad.scoreId}' class='score'>${quad.score}</h3>`;
    domString += '<div class="buttonRow">';
    domString += `<button id='${quad.btnOneId}'><h4>${quad.btnOneHeader}</h4><i class='${quad.btnOneIconClass}'></i></button>`;
    domString += `<button id='${quad.btnTwoId}'><h4>${quad.btnTwoHeader}</h4><i class='${quad.btnTwoIconClass}'></i></button>`;
    domString += '</div>';

    utils.printToDom(quad.mainDivId, domString);
  });
  progress.addButtonListeners();
};

export default {
  buildDom,
};
