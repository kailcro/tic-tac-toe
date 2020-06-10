'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFail)
  // $('#change-password').show()
  // $('#sign-out').show()
  // $('#board').show()
  // $('#games-create').show()
  // $('#games-index').show()
  // $('#game-show').show()
  // $('#game-content').show()
  // $('#sign-up').hide()
  $('div.signup-view').hide()
  $('div.frontlogin-view').show()
  $('div.loggedin-view').hide()
  $('div.signin-signup-toggle').hide()
}

const onSwitchToSignIn = function () {
  event.preventDefault()
  $('div.loggedin-view').hide()
  $('div.frontlogin-view').show()
  $('div.signin-signup-toggle').hide()
  $('div.signup-view').hide()
}

const onSignIn = function (event) {
  event.preventDefault()
  $('div.loggedin-view').show()
  $('div.frontlogin-view').hide()

  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFail)
}

const onSwitchToSignUp = function () {
  event.preventDefault()
  $('div.loggedin-view').hide()
  $('div.frontlogin-view').hide()
  $('div.signin-signup-toggle').show()
  $('div.signup-view').show()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  $('div.loggedin-view').hide()
  $('div.frontlogin-view').show()
  const form = event.target
  const data = getFormFields(form)
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onSwitchToSignIn,
  onSwitchToSignUp
}
