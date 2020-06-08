'use strict'

// const gameEvents = require('./games/events.js')
const authEvents = require('./auth/events.js')

$(() => {
  // $('#games-index').on('click', gameEvents.onIndexGames)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
})
