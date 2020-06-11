'use strict'
const config = require('./../config')
const store = require('./../store')

const createGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (cell, value, over) {
  console.log(`this is cell inside update game:`, cell)
  console.log(`this is store inside update game:`, store)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: cell,
          value: value
        },
        over: over
      }
    }
  })
}

const indexGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGame = function (gameID) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + gameID.games.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  indexGames,
  showGame,
  updateGame
}
