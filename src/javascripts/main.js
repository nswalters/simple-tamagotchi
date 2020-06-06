import '../styles/main.scss';
import '../styles/progress.scss';
import '../styles/eat.scss';
import '../styles/play.scss';
import '../styles/fight.scss';
import '../styles/sleep.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';

const init = () => {
  eat.buildBaseDomString();
  eat.addButtonListeners();
  play.buildBaseDomString();
  play.addButtonListeners();
  fight.buildBaseDomString();
  fight.addButtonListeners();
  sleep.buildBaseDomString();
  sleep.addButtonListeners();
};

init();
