const naviagteTo = url => {
  history.pushState(null, null, url);
  router();
};
const router = async () => {
  const routes = [
    { path: '/', view: () => console.log('viewing about') },
    { path: '/skils', view: () => console.log('viewing skils') },
    { path: '/works', view: () => console.log('viewing works') },
    { path: '/contact', view: () => console.log('viewing contact') },
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

  console.log(match.route.view);
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
