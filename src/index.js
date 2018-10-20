console.log('hello index.js')

import('./logger').then(logger => {
  logger.default();
});