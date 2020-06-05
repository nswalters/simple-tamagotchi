import '../styles/main.scss';
import '../styles/progress.scss';
import '../styles/eat.scss';
import '../styles/play.scss';
import '../styles/fight.scss';
import '../styles/sleep.scss';
import eat from './components/eat';

const init = () => {
  eat.buildDomString();
};

init();
