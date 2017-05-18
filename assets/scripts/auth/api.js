'use strict'

const app = require('./../app')
const store = require('./../store')

// Auth API calls

const post = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data
  })
}

const postSignIn = function (data) {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = (data) => {
  console.log('data is ', data)
  return $.ajax({
    url: app.host + '/change-password/' + store.user.id,
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
  return $.ajax({
    url: app.host + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// update game

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
  createGame

}