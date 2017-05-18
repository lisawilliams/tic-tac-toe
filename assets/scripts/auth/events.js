'use strict'
const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields.js')

// Auth events

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.post(data)
    .then(ui.onAddUserSuccess)
    .catch(ui.onAddUserFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.postSignIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

// this seems like it shouldn't do anything but when
// I comment it out the code no longer runs
// preserving for later refactoring

const postSignInSuccess = (data) => {
  store.user = data.user
  console.log(data.user)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signOut(onSignIn.data)
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// Game events

// Game board array

// Create game

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('hello!')
  const data = getFormFields(event.target)
  console.log(data)
  console.log('onCreateGame ran')
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onClickCellZero = function (event) {
  $('#zero').on('click', '.cellZero').text('it worked')
}

// This is for the index of games. Do this last.
// const onGetGames = function (event) {
//   event.preventDefault()
//   console.log('get index request ran')
//   api.getIndex(store.data)
//     .then(ui.indexSuccess)
//     .catch(ui.indexFailure)
// }

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#create-game').on('submit', onCreateGame)
  $('#zero').on('click', onClickCellZero)
  // $('#one').on('click', onClickCell)
  // $('#two').on('click', onClickCell)
  // $('#three').on('click', onClickCell)
  // $('#four').on('click', onClickCell)
  // $('#five').on('click', onClickCell)
  // $('#six').on('click', onClickCell)
  // $('#seven').on('click', onClickCell)
  // $('#eight').on('click', onClickCell)
  // for when we implement the index function
  // $('get-index').on('click', onGetGames)
}

module.exports = {
  onSignUp,
  onSignIn,
  postSignInSuccess,
  onSignOut,
  onChangePassword,
  onCreateGame,
//  onNewGame,
  onClickCellZero,
  addHandlers
}
