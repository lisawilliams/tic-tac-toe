'use strict'

const config = require('./../config')
const store = require('./../store')

// trying to require this here in order to practice good separation
// but it fails, saying uiGameWon is not a function...when it is.
// maybe a circular reference?
// const ui = require('./ui')

// Auth API calls

const post = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/sign-up',
    method: 'POST',
    data
  })
}

const postSignIn = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiOrigins.production + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = (data) => {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigins.production + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// game API calls

// create game

const createGame = (data) => {
  // when we create a game we have to start with player X
  store.player = 'X'
  store.counter = 0
  console.log('player is ', store.player)
  return $.ajax({
    url: config.apiOrigins.production + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
  .then((response) => {
    console.log('createGame returns ', response)
    store.game = response.game
    // gameID = store.game.id
    console.log('store.game is ', store.game)
    console.log('store.player is player: ', store.player)
  })
}

// update game

const updateGame = (data) => {
  return $.ajax({
    url: config.apiOrigins.production + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const clickedCellZero = function () {
  if (store.counter === 0) {
    store.player = 'X'
  } else {
    if (store.counter % 2) {
      store.player = 'X'
      store.counter++
    } else {
      store.player = 'O'
      store.counter++
    }
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  console.log(store.game.id)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiOrigins.production + '/games/' + store.game.id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 0,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}

const clickedCellOne = function () {
  store.player = 'X'
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  console.log(store.game.id)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiOrigins.production + '/games/' + store.game.id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 1,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}

const clickedCellTwo = function () {
  store.player = 'X'
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  console.log(store.game.id)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiOrigins.production + '/games/' + store.game.id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 2,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}

const clickedCellThree = function () {
  store.player = 'X'
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  console.log(store.game.id)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiOrigins.production + '/games/' + store.game.id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 3,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}

const clickedCellFour = function () {
  store.player = 'X'
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  console.log(store.game.id)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiOrigins.production + '/games/' + store.game.id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 4,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}

const clickedCellFive = function () {
  store.player = 'X'
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  console.log(store.game.id)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiOrigins.production + '/games/' + store.game.id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 5,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}

const clickedCellSix = function () {
  store.player = 'X'
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  console.log(store.game.id)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiOrigins.production + '/games/' + store.game.id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 6,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}

const clickedCellSeven = function () {
  store.player = 'X'
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  console.log(store.game.id)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiOrigins.production + '/games/' + store.game.id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 7,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}

const clickedCellEight = function () {
  store.player = 'X'
  if (store.counter % 2) {
    store.player = 'X'
    store.counter++
  } else {
    store.player = 'O'
    store.counter++
  }
  store.boardValue = store.player
  console.log(store.player + ' ' + store.boardValue + ' ' + store.counter)
  console.log(store.game.id)
  return $.ajax({
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    url: config.apiOrigins.production + '/games/' + store.game.id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': 8,
          'value': '' + store.player + ''
        },
        'over': false
      }
    }
  })
  .then(console.log('turn complete!'))
}

// record game outcomes for user stats

const gameLost = function () {
  store.gameLostStats = store.gameLostStats + 1
  console.log('store gameLost is ' + store.gameLostStats)
}

const gameWon = function () {
  store.gameWonStats = store.gameWonStats + 1
  console.log('store.gameWon is ' + store.gameWonStats)
}

const gameDraw = function () {
  store.gameDrawStats = store.gameDrawStats + 1
  console.log('store.gameDrawStats is ' + store.gameDrawStats)
}

// show all games (index)
const getIndex = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
  .then((response) => {
    store.gamesPlayed = response.games.length
    $('.played').text(response.games.length)
    store.games = response.games
    // $('.usermessage').text(store.games.length)
  })
}

module.exports = {
  post,
  postSignIn,
  signOut,
  changePassword,
  createGame,
  updateGame,
  clickedCellZero,
  clickedCellOne,
  clickedCellTwo,
  clickedCellThree,
  clickedCellFour,
  clickedCellFive,
  clickedCellSix,
  clickedCellSeven,
  clickedCellEight,
  gameLost,
  gameWon,
  gameDraw,
  getIndex

}
