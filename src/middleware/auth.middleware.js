const { expressjwt: jwt} = require('express-jwt')
const jwksRsa = require('jwks-rsa')

exports.checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 20,
    jwksUri: "https://dev-621h0lyofdqyx4j8.us.auth0.com/.well-known/jwks.json"
  }),

  audience: "BIq2qWWNneDP9tNDYPqj6nrZSp15orC7",
  issuer: "https://dev-621h0lyofdqyx4j8.us.auth0.com/",
  algorithms: ['RS256']
})