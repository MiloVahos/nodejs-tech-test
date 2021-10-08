const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-5w812hes.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://lean-test/',
  issuer: 'https://dev-5w812hes.us.auth0.com/',
  algorithms: ['RS256']
});

module.exports = jwtCheck