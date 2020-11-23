const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')

passport.use( // authenticate using Google OAuth
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        // eslint-disable-next-line no-unused-vars
        (accessToken, refreshToken, profile, done) => {
            console.log('access token:', accessToken)
            console.log('refresh token:', refreshToken)
            console.log('profile:', profile)
        }
    )
)