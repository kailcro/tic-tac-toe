const store = require('./../store')
// const gameEvents = require('./events.js')

const createGameSuccess = function (data) {
  // console.log(`this is data inside create game success`, data)
  $('#message').text('Created your game successfully!')
  store.game = data.game
}

const createGameFail = function () {
  $('form').trigger('reset')
  $('#message').text('Creating new game failed')
}

const indexSuccess = function (responseData) {
  let xWinner = 0
  let oWinner = 0

  responseData.games.forEach(eachGame => {
    if (eachGame.over === true && eachGame.cells[0] === 'x' && eachGame.cells[1] === 'x' && eachGame.cells[2] === 'x') {
      xWinner += 1
      return xWinner
    } else if (eachGame.over === true && eachGame.cells[3] === 'x' && eachGame.cells[4] === 'x' && eachGame.cells[5] === 'x') {
      xWinner += 1
      return xWinner
    } else if (eachGame.over === true && eachGame.cells[6] === 'x' && eachGame.cells[7] === 'x' && eachGame.cells[8] === 'x') {
      xWinner += 1
      return xWinner
    } else if (eachGame.over === true && eachGame.cells[0] === 'x' && eachGame.cells[3] === 'x' && eachGame.cells[6] === 'x') {
      xWinner += 1
      return xWinner
    } else if (eachGame.over === true && eachGame.cells[1] === 'x' && eachGame.cells[4] === 'x' && eachGame.cells[7] === 'x') {
      xWinner += 1
      return xWinner
    } else if (eachGame.over === true && eachGame.cells[2] === 'x' && eachGame.cells[5] === 'x' && eachGame.cells[8] === 'x') {
      xWinner += 1
      return xWinner
    } else if (eachGame.over === true && eachGame.cells[0] === 'x' && eachGame.cells[4] === 'x' && eachGame.cells[8] === 'x') {
      xWinner += 1
      return xWinner
    } else if (eachGame.over === true && eachGame.cells[2] === 'x' && eachGame.cells[4] === 'x' && eachGame.cells[6] === 'x') {
      xWinner += 1
      return xWinner
    } else if (eachGame.over === true && eachGame.cells[0] === 'o' && eachGame.cells[1] === 'o' && eachGame.cells[2] === 'o') {
      oWinner += 1
      return oWinner
    } else if (eachGame.over === true && eachGame.cells[3] === 'o' && eachGame.cells[4] === 'o' && eachGame.cells[5] === 'o') {
      oWinner += 1
      return oWinner
    } else if (eachGame.over === true && eachGame.cells[6] === 'o' && eachGame.cells[7] === 'o' && eachGame.cells[8] === 'o') {
      oWinner += 1
      return oWinner
    } else if (eachGame.over === true && eachGame.cells[0] === 'o' && eachGame.cells[3] === 'o' && eachGame.cells[6] === 'o') {
      oWinner += 1
      return oWinner
    } else if (eachGame.over === true && eachGame.cells[1] === 'o' && eachGame.cells[4] === 'o' && eachGame.cells[7] === 'o') {
      oWinner += 1
      return oWinner
    } else if (eachGame.over === true && eachGame.cells[2] === 'o' && eachGame.cells[5] === 'o' && eachGame.cells[8] === 'o') {
      oWinner += 1
      return oWinner
    } else if (eachGame.over === true && eachGame.cells[0] === 'o' && eachGame.cells[4] === 'o' && eachGame.cells[8] === 'o') {
      oWinner += 1
      return oWinner
    } else if (eachGame.over === true && eachGame.cells[2] === 'o' && eachGame.cells[4] === 'o' && eachGame.cells[6] === 'o') {
      oWinner += 1
      return oWinner
    }
  })
  gameStats(xWinner, oWinner)
}

const gameStats = function (xWinner, oWinner) {
  // let totalGamesPlayed = xWinner + oWinner
  // $('#stats').text('🍕 has won ', xWinner, `games, and 🎱 has won `, oWinner, `games`)
  $('#stats').text(`🍕 has won ${xWinner} games, and 🎱 has won ${oWinner} games`)
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
  store.game = data.game
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
