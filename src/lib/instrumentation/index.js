const dotenv = require('dotenv')

const initializeNewRelic = () => {
  if (process.env.NODE_ENV === 'production' && process.env.NEWRELIC_KEY) {
    // eslint-disable-next-line global-require
    require('newrelic')
  }
}

const initializeDotEnv = () => {
  if (process.env.NODE_ENV === 'production' && process.env.DOTENV_PATH) {
    dotenv.config({ path: process.env.DOTENV_PATH })
  }
}

const initialize = () => {
  initializeDotEnv()
  initializeNewRelic()
}

module.exports = {
  initialize,
  initializeDotEnv,
  initializeNewRelic,
}
