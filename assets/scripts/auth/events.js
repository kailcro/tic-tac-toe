'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')
const gameEvents = require('./../games/events.js')

// Event when SignUp is clicked
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFail)
  $('div.signup-view').hide()
  $('div.frontlogin-view').show()
  $('div.loggedin-view').hide()
  $('div.signin-signup-toggle').hide()
}

// Event when SignIn is clicked
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFail)
}

// Event when switing to SignIn View
const onSwitchToSignIn = function () {
  event.preventDefault()
  $('div.loggedin-view').hide()
  $('div.frontlogin-view').show()
  $('div.signin-signup-toggle').hide()
  $('div.signup-view').hide()
}

// Event when switing to SignUp View
const onSwitchToSignUp = function () {
  event.preventDefault()
  $('div.loggedin-view').hide()
  $('div.frontlogin-view').hide()
  $('div.signin-signup-toggle').show()
  $('div.signup-view').show()
}

// Event when change PW is clicked
const onShowChangePw = function () {
  $('div.changepassword-view').show()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFail)
}

// Event when Sign Out is clicked
const onSignOut = function (event) {
  event.preventDefault()
  $('div.loggedin-view').hide()
  $('.changepassword-view').hide()
  $('div.frontlogin-view').show()
  $('#stats').hide()
  // Clear the game board for next login:
  $('#gameBoard').hide()
  $('div.square').html('')
  $('div.square').css('background-color', '')
  $('#board div').on('click', gameEvents.onClicked)
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
  onSwitchToSignUp,
  onShowChangePw
}
