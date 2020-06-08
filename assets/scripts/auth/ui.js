'use strict'

const store = require('./../store')

const onSignUpSuccess = function (responseData) {
  $('#message').text('Hello ' + responseData.user.email + ", you've successfully signed up!")
}

const onSignUpFail = function () {
  $('#message').text('Sign Up Failed!')
  $('form').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  $('#message').text('Hello ' + responseData.user.email + ", you've successfully signed in!")
  $('form').trigger('reset')
  store.user = responseData.user
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
  $('#messsage').text('Sign out complete')
  $('form').trigger('reset')
}

const onSignOutFail = function () {
  $('#messsage').text('Sign out failed')
  $('form').trigger('reset')
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
