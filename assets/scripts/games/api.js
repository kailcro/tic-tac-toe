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
  showGame
}
