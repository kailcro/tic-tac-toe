'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')
const store = require('./../store')

// turn starts as true, which defaults to x
let turn = true

// Create game button
const onCreateGame = function (event) {
  // console.log(`This is store.games in create new game BEFORE`, store.game)
  // console.log(`This is store.cells in create new game BEFORE`, store.cells)
  // console.log(`This is store.counter in create new game BEFORE`, store.counterForDraw)

  // Clear the board visually
  $('div.square').html('')
  $('div.square').css('background-color', '')
  // Clear the variables associated with the board
  // need to clear both the cells and counter
  store.cells = ['', '', '', '', '', '', '', '', '']
  store.counterForDraw = []
  store.over = false
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFail)
  // console.log(`This is store.games in create new game AFTER`, store.game)
  // console.log(`This is store.cells in create new game AFTER`, store.cells)
  // console.log(`This is store.counter in create new game AFTER`, store.counterForDraw)
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
  if (event.target.innerHTML === '') {
    event.target.innerHTML = turn ? '🍕' : '🎱'
    console.log(`event target`, event.target.dataset)
    const cell = event.target.dataset.index
    const value = turn ? '🍕' : '🎱'
    store.cells[cell] = turn ? '🍕' : '🎱'
    turn = !turn
    store.counterForDraw.push(cell)
    // store.over = changeOverValue()
    // ui.updateGameSuccess()
    checkWinner()
    api.updateGame(cell, value, store.over)
      .then(ui.updateTest)
      .catch(ui.updateGameFail)
  } else {
    $('#message').text('spot taken')
  }
}

// Checks to see if there was a winner
const checkWinner = function () {
  if (store.cells[0] === '🍕' && store.cells[1] === '🍕' && store.cells[2] === '🍕') {
    $('#message').text('🍕 Wins!')
    $('#cell-0').css('background-color', 'green')
    $('#cell-1').css('background-color', 'green')
    $('#cell-2').css('background-color', 'green')
    store.over = true
    gameOver(store.over)
  } else if (store.cells[3] === '🍕' && store.cells[4] === '🍕' && store.cells[5] === '🍕') {
    $('#message').text('🍕 Wins!')
    $('#cell-3').css('background-color', 'green')
    $('#cell-4').css('background-color', 'green')
    $('#cell-5').css('background-color', 'green')
    store.over = true
    gameOver(store.over)
  } else if (store.cells[6] === '🍕' && store.cells[7] === '🍕' && store.cells[8] === '🍕') {
    $('#message').text('🍕 Wins!')
    $('#cell-6').css('background-color', 'green')
    $('#cell-7').css('background-color', 'green')
    $('#cell-8').css('background-color', 'green')
    gameOver(store.over)
  } else if (store.cells[0] === '🍕' && store.cells[3] === '🍕' && store.cells[6] === '🍕') {
    $('#message').text('🍕 Wins!')
    $('#cell-0').css('background-color', 'green')
    $('#cell-3').css('background-color', 'green')
    $('#cell-6').css('background-color', 'green')
    gameOver(store.over)
  } else if (store.cells[1] === '🍕' && store.cells[4] === '🍕' && store.cells[7] === '🍕') {
    $('#message').text('🍕 Wins!')
    $('#cell-1').css('background-color', 'green')
    $('#cell-4').css('background-color', 'green')
    $('#cell-7').css('background-color', 'green')
    store.over = true
    gameOver(store.over)
  } else if (store.cells[2] === '🍕' && store.cells[5] === '🍕' && store.cells[8] === '🍕') {
    $('#message').text('🍕 Wins!')
    $('#cell-2').css('background-color', 'green')
    $('#cell-5').css('background-color', 'green')
    $('#cell-8').css('background-color', 'green')
    store.over = true
    gameOver(store.over)
  } else if (store.cells[0] === '🍕' && store.cells[4] === '🍕' && store.cells[8] === '🍕') {
    $('#message').text('🍕 Wins!')
    $('#cell-0').css('background-color', 'green')
    $('#cell-4').css('background-color', 'green')
    $('#cell-8').css('background-color', 'green')
    store.over = true
    gameOver(store.over)
  } else if (store.cells[2] === '🍕' && store.cells[4] === '🍕' && store.cells[6] === '🍕') {
    $('#message').text('X Wins!')
    $('#cell-2').css('background-color', 'green')
    $('#cell-4').css('background-color', 'green')
    $('#cell-6').css('background-color', 'green')
    store.over = true
    gameOver(store.over)
  } else if (store.cells[0] === '🎱' && store.cells[1] === '🎱' && store.cells[2] === '🎱') {
    $('#message').text('🎱 Wins!')
    $('#cell-0').css('background-color', 'green')
    $('#cell-1').css('background-color', 'green')
    $('#cell-2').css('background-color', 'green')
    store.over = true
    gameOver(store.over)
  } else if (store.cells[3] === '🎱' && store.cells[4] === '🎱' && store.cells[5] === '🎱') {
    $('#message').text('🎱 Wins!')
    $('#cell-3').css('background-color', 'green')
    $('#cell-4').css('background-color', 'green')
    $('#cell-5').css('background-color', 'green')
    store.over = true
    gameOver(store.over)
  } else if (store.cells[6] === '🎱' && store.cells[7] === '🎱' && store.cells[8] === '🎱') {
    $('#message').text('🎱 Wins!')
    $('#cell-6').css('background-color', 'green')
    $('#cell-7').css('background-color', 'green')
    $('#cell-8').css('background-color', 'green')
    store.over = true
    gameOver(store.over)
  } else if (store.cells[0] === '🎱' && store.cells[3] === '🎱' && store.cells[6] === '🎱') {
    $('#message').text('🎱 Wins!')
    $('#cell-0').css('background-color', 'green')
    $('#cell-3').css('background-color', 'green')
    $('#cell-6').css('background-color', 'green')
    store.over = true
    gameOver(store.over)
  } else if (store.cells[1] === '🎱' && store.cells[4] === '🎱' && store.cells[7] === '🎱') {
    $('#message').text('🎱 Wins!')
    $('#cell-1').css('background-color', 'green')
    $('#cell-4').css('background-color', 'green')
    $('#cell-7').css('background-color', 'green')
    store.over = true
    gameOver(store.over)
  } else if (store.cells[2] === '🎱' && store.cells[5] === '🎱' && store.cells[8] === '🎱') {
    $('#message').text('🎱 Wins!')
    $('#cell-2').css('background-color', 'green')
    $('#cell-5').css('background-color', 'green')
    $('#cell-8').css('background-color', 'green')
    store.over = true
    gameOver(store.over)
  } else if (store.cells[0] === '🎱' && store.cells[4] === '🎱' && store.cells[8] === '🎱') {
    $('#message').text('🎱 Wins!')
    $('#cell-0').css('background-color', 'green')
    $('#cell-4').css('background-color', 'green')
    $('#cell-8').css('background-color', 'green')
    gameOver(store.over)
  }
}

// Function used to reset the board
const gameOver = function (data) {
  store.over = true
  console.log(`this is store.game.over in gaemOVer`, store.game.over)
  console.log(`this is store.game in gaemOVer`, store.over)
  console.log(`this is data in gaemOVer`, data)
  setTimeout(onCreateGame, 3000)
}

module.exports = {
  onCreateGame,
  onIndexGames,
  onShowGame,
  onClicked,
  checkWinner
}
