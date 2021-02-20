import About from './views/About.js';
import Skils from './views/Skils.js';
import Works from './views/Works.js';
import contact from './views/Contact.js';

const naviagteTo = url => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: '/', view: About },
    { path: '/skils', view: Skils },
    { path: '/works', view: Works },
    { path: '/contact', view: contact },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  //go to "/" when path doesn't exsit
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.querySelector('#app').innerHTML = await view.getHtml();
};

//rerun page when go to previous page or forward page
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  //move to other page without page refresh
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      naviagteTo(e.target.href);
    }
  });
  router();
});
