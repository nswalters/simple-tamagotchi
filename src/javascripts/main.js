import '../styles/main.scss';
import '../styles/progress.scss';
import '../styles/eat.scss';
import '../styles/play.scss';
import '../styles/fight.scss';
import '../styles/sleep.scss';
import builder from './components/domBuilder';

const init = () => {
  builder.buildDom();
};

init();
