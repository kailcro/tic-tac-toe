const store = require('./../store')

const createGameSuccess = function (data) {
  $('form').trigger('reset')
  $('#message').text('Created your game successfully!')
  store.games = data.games
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

const checkWinner = function () {
  // if (data-index=0, data-index=1, data-index=3 === 'x')
}
module.exports = {
  createGameSuccess,
  createGameFail,
  indexSuccess,
  indexFail,
  showGameSuccess,
  showGameFail,
  checkWinner
}
