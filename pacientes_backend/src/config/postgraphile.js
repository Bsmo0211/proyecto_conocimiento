const {postgraphile} = require("postgraphile");

const options = {
  watchPg: true,
  graphiql: true,
  enhanceGraphiql: true,
  dynamicJson: true,
  subscriptions: true,
  retryOnInitFail: true,
}

module.exports = postgraphile(
    process.env.DATABASE_URL,
    ['usuarios'],
    options
)