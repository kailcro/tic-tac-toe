'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')

let turn = true
let player1 = []
let player2 = []

const onCreateGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFail)
}

const onIndexGames = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.indexGames(data)
    .then(ui.indexSuccess)
    .catch(ui.indexFail)
}

const onShowGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.showGame(data)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFail)
}

const onClicked = function (event) {
  event.preventDefault()
  event.target.innerHTML = turn ? 'x' : 'o'
  const cell = event.target.dataset.index
  turn ? player1.push(cell) : player2.push(cell)
  turn = !turn
  console.log(`This is cell inside of onclicked:`, cell)
  console.log(`This is player1 array:`, player1)
  console.log(`This is player2 array:`, player2)

//  Do a if statement to check the contents of player 1 array
// and player 2 arrray to see if anything matches against the winning combinations

// another idea: send the the player 1 array and player 2 array to ui.CheckWinner()
// then write the check winner function out to do the logic of what defines a win
  // ui.checkWinner()
}

module.exports = {
  onCreateGame,
  onIndexGames,
  onShowGame,
  onClicked
}
