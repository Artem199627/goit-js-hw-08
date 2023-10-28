import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

CURRENT_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getTime =  date => {
    localStorage.setItem(CURRENT_KEY, JSON.stringify(date.seconds));
};
player.on("timeupdate", throttle(getTime, 1000));

const currentTime = Number(JSON.parse(localStorage.getItem(CURRENT_KEY)));

player.setCurrentTime(currentTime).then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
