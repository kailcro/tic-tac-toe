const store = require('./../store')

const createGameSuccess = function (data) {
  console.log(`this is data inside create game success`, data)
  $('#message').text('Created your game successfully!')
  store.game = data.game
  console.log(`this is store inside create game success`, store)
}

const createGameFail = function () {
  $('form').trigger('reset')
  $('#message').text('Creating new game failed')
}

const indexSuccess = function (responseData) {
  let gameHtml = ''
  responseData.games.forEach(games => {
    const oneGame = (`<h4>Game ID: ${games._id}<h4>`)
    gameHtml += oneGame
  })
  $('#game-content').html(gameHtml)
  $('#message').text('Index sucessful.').show()
}

const indexFail = function () {
  $('#message').text('Index failed.').show()
}

const showGameSuccess = function (responseData) {
  const gameHtml = (`<h4>Game Id: ${responseData.game[0]._id}<h4>`)
  $('#game-content').html(gameHtml)
  $('form').trigger('reset')
  $('#message').text('Getting one book was sucessful.').show()
}

const showGameFail = function () {
  $('#message').text('Show one Game failed.').show()
}

const updateGameFail = function () {
  $('#message').text('Game move failed.').show()
}

const updateGameSuccess = function (data) {
  store.games = data.games
  console.log(`this is data inside updateGameSuccess`, data)
}

module.exports = {
  createGameSuccess,
  createGameFail,
  indexSuccess,
  indexFail,
  showGameSuccess,
  showGameFail,
  updateGameFail,
  updateGameSuccess
}
