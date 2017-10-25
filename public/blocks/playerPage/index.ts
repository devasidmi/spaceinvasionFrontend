import Block from '../block/index';
import userService from '../../services/userService';
import { showHome, router } from '../../main';
import playerpageTemplate from './playerPage.pug';

function onLogoutBtnClick(el) {
  el.querySelector('.ui.logout').addEventListener('click', () => {
    userService.logout().then(() => {
      router.setPath('/');
      showHome();
    });
  });
}

class PlayerPage extends Block {
  constructor() {
    const el = document.createElement('div');
    el.innerHTML = playerpageTemplate({ user: userService.user });
    onLogoutBtnClick(el);
    super(el);
  }
}

export default PlayerPage;