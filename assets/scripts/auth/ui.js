'use strict'

const store = require('./../store')
const eventGames = require('./../games/events.js')

const onSignUpSuccess = function (data) {
  $('#message').text('Hello ' + data.user.email + ", you've successfully signed up!")
}

const onSignUpFail = function () {
  $('#message').text('Sign Up Failed!')
  $('form').trigger('reset')
}

const onSignInSuccess = function (data) {
  $('div.loggedin-view').show()
  $('div.frontlogin-view').hide()
  $('#message').text('Welcome, ' + data.user.email + '! Click Start a New Game to play.')
  $('form').trigger('reset')
  store.user = data.user
  // eventGames.onCreateGame()
}

const onSignInFail = function () {
  $('div.loggedin-view').hide()
  $('div.frontlogin-view').show()
  $('#message').text('Sign in failed')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#message').text('Your password has been changed!')
  $('form').trigger('reset')
}

const onChangePasswordFail = function () {
  $('#message').text('Change password failed!')
  $('form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message').text('Sign out complete')
}

const onSignOutFail = function () {
  $('#message').text('Sign out failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFail,
  onSignInSuccess,
  onSignInFail,
  onChangePasswordSuccess,
  onChangePasswordFail,
  onSignOutSuccess,
  onSignOutFail
}
