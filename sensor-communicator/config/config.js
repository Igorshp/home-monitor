
module.exports = {
    development: {
      cc: {
          consumerKey: 'wlekrjawe23ij23r'
        , consumerSecret: 'w3ljasfdlkje'
        , callbackURL: "http://pi:3000/auth/cloudcordinator/callback"
        //This server MUST be a different IP or domain to work correctly or Cookies will be overwritten
        , oauthServer: 'http://homemonitor.bryanpaluch.com'
      },
    }
  , test: {

    }
  , production: {

    }
}
