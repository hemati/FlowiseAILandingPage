import ReactGA from 'react-ga4';

export const initGA = () => {
  // console.log('GA init');
  // ReactGA.initialize('G-RJXVX78LLH');
};

export const logPageView = () => {
  // console.log(`Logging pageview for ${window.location.pathname}`);
  // ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: document.title });
};

export const logEvent = (category = '', action = '') => {
  // if (category && action) {
  //   ReactGA.event({
  //     category: category,
  //     action: action,
  //     nonInteraction: true
  //   });
  // }
};

export const logException = (description = '', fatal = false) => {
  // if (description) {
  //   ReactGA.exception({ description, fatal });
  // }
};
