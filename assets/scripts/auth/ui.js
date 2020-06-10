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
  $('#message').text('Welcome, ' + data.user.email + '!')
  $('form').trigger('reset')
  store.user = data.user
  eventGames.onCreateGame()
}

const onSignInFail = function () {
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
