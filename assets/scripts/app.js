'use strict'

const gameEvents = require('./games/events.js')
const authEvents = require('./auth/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#games-create').on('click', gameEvents.onCreateGame)
  $('#games-index').on('click', gameEvents.onIndexGames)
  $('#game-show').on('submit', gameEvents.onShowGame)
  $('#board div').one('click', gameEvents.onClicked)
})
