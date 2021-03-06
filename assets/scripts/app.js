'use strict'

const gameEvents = require('./games/events.js')
const authEvents = require('./auth/events.js')

$(() => {
  // Authorization:
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('div.loggedin-view').hide()
  $('div.frontlogin-view').hide()
  $('div.signin-signup-toggle').on('click', authEvents.onSwitchToSignIn)
  $('div.move-to-signup').on('click', authEvents.onSwitchToSignUp)
  $('div.changepassword-view').hide()
  $('.show-changepassword').on('click', authEvents.onShowChangePw)
  // Game Related:
  $('#games-create').on('click', gameEvents.onCreateGame)
  $('#games-index').on('click', gameEvents.onIndexGames)
  $('#gameBoard').hide()
  $('#stats').hide()
})
