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
  console.log(data)
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
  event.target.innerHTML = turn ? 'x' : 'o'
  const cell = event.target.dataset.index
  store.cells[cell] = turn ? 'x' : 'o'
  console.log(`this is cells`, store.cells)
  turn = !turn
  store.counterForDraw.push(cell)
  checkWinner()
}

// Checks to see if there was a winner
const checkWinner = function () {
  if (store.cells[0] === 'x' && store.cells[1] === 'x' && store.cells[2] === 'x') {
    $('#message').text('X Wins!')
    gameOver()
  } else if (store.cells[3] === 'x' && store.cells[4] === 'x' && store.cells[5] === 'x') {
    $('#message').text('X Wins!')
    gameOver()
  } else if (store.cells[6] === 'x' && store.cells[7] === 'x' && store.cells[8] === 'x') {
    $('#message').text('X Wins!')
    gameOver()
  } else if (store.cells[0] === 'x' && store.cells[3] === 'x' && store.cells[6] === 'x') {
    $('#message').text('X Wins!')
    gameOver()
  } else if (store.cells[1] === 'x' && store.cells[4] === 'x' && store.cells[7] === 'x') {
    $('#message').text('X Wins!')
    gameOver()
  } else if (store.cells[2] === 'x' && store.cells[5] === 'x' && store.cells[8] === 'x') {
    $('#message').text('X Wins!')
    gameOver()
  } else if (store.cells[0] === 'x' && store.cells[4] === 'x' && store.cells[8] === 'x') {
    $('#message').text('X Wins!')
    gameOver()
  } else if (store.cells[2] === 'x' && store.cells[4] === 'x' && store.cells[6] === 'x') {
    $('#message').text('X Wins!')
    gameOver()
  } else if (store.cells[0] === 'o' && store.cells[1] === 'o' && store.cells[2] === 'o') {
    $('#message').text('O Wins!')
    gameOver()
  } else if (store.cells[3] === 'o' && store.cells[4] === 'o' && store.cells[5] === 'o') {
    $('#message').text('O Wins!')
    gameOver()
  } else if (store.cells[6] === 'o' && store.cells[7] === 'o' && store.cells[8] === 'o') {
    $('#message').text('O Wins!')
    gameOver()
  } else if (store.cells[0] === 'o' && store.cells[3] === 'o' && store.cells[6] === 'o') {
    $('#message').text('O Wins!')
    gameOver()
  } else if (store.cells[1] === 'o' && store.cells[4] === 'o' && store.cells[7] === 'o') {
    $('#message').text('O Wins!')
    gameOver()
  } else if (store.cells[2] === 'o' && store.cells[5] === 'o' && store.cells[8] === 'o') {
    $('#message').text('O Wins!')
    gameOver()
  } else if (store.cells[0] === 'o' && store.cells[4] === 'o' && store.cells[8] === 'o') {
    $('#message').text('O Wins!')
    gameOver()
  } else if (store.cells[2] === 'o' && store.cells[4] === 'o' && store.cells[6] === 'o') {
    $('#message').text('O Wins!')
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
