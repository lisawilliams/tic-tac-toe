'use strict'

const config = require('./../config')
// const app = require('./../app')
const store = require('./../store')

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
  store.player = 'X'
  // if (store.counter % 2) {
  //   store.player = 'X'
  //   store.counter++
  // } else {
  //   store.player = 'O'
  //   store.counter++
  // }
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

// working on updateGame function that passes new state to API
// const updateGame = (data) => {
//   console.log('updateGame has loaded but not run yet')
//   return $.ajax({
//     url: config.apiOrigins.production + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data:{
//   //     'game':{
//   //       'cell':{
//   //         'index': index,
//   //         'value': value
//   //       },
//   //       'over': over
//   //   }
//   // }
//   }
//   .then((response) =>{
//     store.game.cells = response.game.cells
//   })

// show all games (index)

// const getIndex = (success, fail) => {
//   console.log('Started request')
//   $.ajax({
//     method: 'GET',
//     url: app.host + '/games',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  post,
  postSignIn,
  signOut,
  changePassword,
  createGame,
  updateGame,
  clickedCellZero
}
