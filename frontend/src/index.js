import drawBackground from '@/background/background.js';
import TokenManager from '@/utils/TokenManager';
import Fetch from '@/utils/Fetch';
import Router from '@/utils/Router';
import SocketManager from '@/utils/SocketManager';

Fetch.init();

window.addEventListener('popstate', Router.render);

document.addEventListener('DOMContentLoaded', async () => {
  if (document.referrer === '' || document.referrer === null) {
    SocketManager.closeSockets();
    await Router.navigateTo('/');
  }
  if (!TokenManager.getAccessToken() && TokenManager.getLoginStatus()) {
    await TokenManager.reissueAccessToken();
  }
  const navigations = document.getElementsByTagName('a');
  Array.prototype.forEach.call(navigations, (nav) => {
    nav.addEventListener('click', async (e) => {
      e.preventDefault();
      await Router.navigateTo(nav.pathname);
    });
  });

  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', async () => {
    await TokenManager.logout();
    await Router.navigateTo('/login');
  });
  await Router.render();
});

document.addEventListener('click', (e) => {
  const target = e.target || null;
  const collapseElement = document.querySelector('.collapse');
  if (collapseElement && !collapseElement.contains(target)) {
    collapseElement.classList.remove('show');
  }
});

drawBackground();
