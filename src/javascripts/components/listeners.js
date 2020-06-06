import eat from './eat';
import fight from './fight';
import play from './play';
import sleep from './sleep';
import utils from '../helpers/utils';

const addHealthy = () => {
  const obj = eat.getEatObj();
  eat.setScore(obj.HEALTHY_FOOD_INCREMENT);
  utils.printToDom('#fullnessScore', obj.score);
};

const addUnhealthy = () => {
  const obj = eat.getEatObj();
  eat.setScore(obj.UNHEALTHY_FOOD_INCREMENT);
  utils.printToDom('#fullnessScore', obj.score);
};

const addSuperFun = () => {
  const obj = play.getFunObj();
  play.setScore(obj.SUPER_FUN_INCREMENT);
  utils.printToDom('#funScore', obj.score);
};

const addSlightlyFun = () => {
  const obj = play.getFunObj();
  play.setScore(obj.SLIGHTLY_FUN_INCREMENT);
  utils.printToDom('#funScore', obj.score);
};

const addRunAway = () => {
  const obj = fight.getFightObj();
  fight.setScore(obj.RUN_INCREMENT);
  utils.printToDom('#strengthScore', obj.score);
};

const addFight = () => {
  const obj = fight.getFightObj();
  fight.setScore(obj.FIGHT_INCREMENT);
  utils.printToDom('#strengthScore', obj.score);
};

const addNap = () => {
  const obj = sleep.getSleepObj();
  sleep.setScore(obj.NAP_INCREMENT);
  utils.printToDom('#energyScore', obj.score);
};

const addSlumber = () => {
  const obj = sleep.getSleepObj();
  sleep.setScore(obj.SLUMBER_INCREMENT);
  utils.printToDom('#energyScore', obj.score);
};

const addButtonListeners = () => {
  $('#healthyButton').click(addHealthy);
  $('#unhealthyButton').click(addUnhealthy);
  $('#funButton').click(addSuperFun);
  $('#slightlyFunButton').click(addSlightlyFun);
  $('#runButton').click(addRunAway);
  $('#fightButton').click(addFight);
  $('#napButton').click(addNap);
  $('#slumberButton').click(addSlumber);
};

export default {
  addButtonListeners,
};
