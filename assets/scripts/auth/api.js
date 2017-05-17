'use strict'

const app = require('./../app')
const store = require('../store')

// functions that are API calls

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

// const signOut = function () {
//   return $.ajax({
//     method: 'DELETE',
//     url: app.host + '/sign-out/' + app.user.id,
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     }
//   })
// }

// above function returns:
// "user is not defined"
// stack: ReferenceError: user is not defined↵    at Object.signOut (http://localhost:7165/public/application.js:699:37)↵    at HTMLFormElement.onSignOut (http://localhost:7165/public/application.js:209:8)↵    at HTMLFormElement.dispatch (http://localhost:7165/public/vendor.js:13120:28)↵    at HTMLFormElement.elemData.handle (http://localhost:7165/public/vendor.js:12928:29)

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Ok so looks like we have to define 'store'

module.exports = {
  post,
  postSignIn,
  signOut
}
