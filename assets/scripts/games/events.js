'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store')

// turn starts as true, which defaults to x
let turn = true

// Create game button
const onCreateGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

// FIX THIS BUTTON
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFail)
}

// Index games button
const onIndexGames = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.indexGames(data)
    .then(ui.indexSuccess)
    .catch(ui.indexFail)
}

// Search for a game by ID
const onShowGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.showGame(data)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFail)
}

// Places the x and o on the board by clicking
// Alternate between x and o based on turn true/false
// Use a counter which is used to decide on draw
const onClicked = function (event) {
  event.preventDefault()
  event.target.innerHTML = turn ? '🍕' : '🎱'
  const cell = event.target.dataset.index
  store.cells[cell] = turn ? '🍕' : '🎱'
  turn = !turn
  store.counterForDraw.push(cell)
  checkWinner()
}

// Checks to see if there was a winner
const checkWinner = function () {
  if (store.cells[0] === '🍕' && store.cells[1] === '🍕' && store.cells[2] === '🍕') {
    $('#message').text('🍕 Wins!')
    gameOver()
  } else if (store.cells[3] === '🍕' && store.cells[4] === '🍕' && store.cells[5] === '🍕') {
    $('#message').text('🍕 Wins!')
    gameOver()
  } else if (store.cells[6] === '🍕' && store.cells[7] === '🍕' && store.cells[8] === '🍕') {
    $('#message').text('🍕 Wins!')
    gameOver()
  } else if (store.cells[0] === '🍕' && store.cells[3] === '🍕' && store.cells[6] === '🍕') {
    $('#message').text('🍕 Wins!')
    gameOver()
  } else if (store.cells[1] === '🍕' && store.cells[4] === '🍕' && store.cells[7] === '🍕') {
    $('#message').text('🍕 Wins!')
    gameOver()
  } else if (store.cells[2] === '🍕' && store.cells[5] === '🍕' && store.cells[8] === '🍕') {
    $('#message').text('🍕 Wins!')
    gameOver()
  } else if (store.cells[0] === '🍕' && store.cells[4] === '🍕' && store.cells[8] === '🍕') {
    $('#message').text('🍕 Wins!')
    gameOver()
  } else if (store.cells[2] === '🍕' && store.cells[4] === '🍕' && store.cells[6] === '🍕') {
    $('#message').text('X Wins!')
    gameOver()
  } else if (store.cells[0] === '🎱' && store.cells[1] === '🎱' && store.cells[2] === '🎱') {
    $('#message').text('🎱 Wins!')
    gameOver()
  } else if (store.cells[3] === '🎱' && store.cells[4] === '🎱' && store.cells[5] === '🎱') {
    $('#message').text('🎱 Wins!')
    gameOver()
  } else if (store.cells[6] === '🎱' && store.cells[7] === '🎱' && store.cells[8] === '🎱') {
    $('#message').text('🎱 Wins!')
    gameOver()
  } else if (store.cells[0] === '🎱' && store.cells[3] === '🎱' && store.cells[6] === '🎱') {
    $('#message').text('🎱 Wins!')
    gameOver()
  } else if (store.cells[1] === '🎱' && store.cells[4] === '🎱' && store.cells[7] === '🎱') {
    $('#message').text('🎱 Wins!')
    gameOver()
  } else if (store.cells[2] === '🎱' && store.cells[5] === '🎱' && store.cells[8] === '🎱') {
    $('#message').text('🎱 Wins!')
    gameOver()
  } else if (store.cells[0] === '🎱' && store.cells[4] === '🎱' && store.cells[8] === '🎱') {
    $('#message').text('🎱 Wins!')
    gameOver()
  } else if (store.cells[2] === '🎱' && store.cells[4] === '🎱' && store.cells[6] === '🎱') {
    $('#message').text('🎱 Wins!')
    gameOver()
  } else if (store.counterForDraw.length > 8) {
    $('#message').text("It's a draw!")
    gameOver()
  }
}

// Function used to reset the board
const gameOver = function () {

}

module.exports = {
  onCreateGame,
  onIndexGames,
  onShowGame,
  onClicked,
  checkWinner
}
