'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

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

const postCreateGameSuccess = (data) => {
  store.game = data.game
  console.log('this is postCreateGameSuccess', data.game)
}

// const onClickCellZero = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   $('.cellZero').html('X')
//   store.game.cells[0] = 'x'
//   console.log(store.game)
//   console.log('this is here so the linter will not yell', data)
//   api.updateGame(store.game)
//     .then(ui.updateGameSuccess)
//     .catch(ui.updateGameFailure)
// }

const onClickCellZero = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // we have to get the value to return from the API at some point, but for now...
  // $('.cellZero').html(store.player)
  store.game.cells[0] = 'x'
  console.log(store.game)
  console.log('this is here so the linter will not yell', data)
  api.clickedCellZero() // passing the credentials to the ajax call
    .then(ui.clickedCellZeroSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.clickedCellZeroFailure)
}

const onClickCellOne = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // we have to get the value to return from the API at some point, but for now...
  // $('.cellZero').html(store.player)
  // store.game.cells[0] = 'x'
  console.log(store.game)
  console.log('this is here so the linter will not yell', data)
  api.clickedCellOne() // passing the credentials to the ajax call
    .then(ui.clickedCellOneSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.clickedCellOneFailure)
}

const onClickCellTwo = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // we have to get the value to return from the API at some point, but for now...
  // $('.cellZero').html(store.player)
  // store.game.cells[0] = 'x'
  console.log(store.game)
  console.log('this is here so the linter will not yell', data)
  api.clickedCellTwo() // passing the credentials to the ajax call
    .then(ui.clickedCellTwoSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.clickedCellTwoFailure)
}

const onClickCellThree = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // we have to get the value to return from the API at some point, but for now...
  // $('.cellZero').html(store.player)
  // store.game.cells[0] = 'x'
  console.log(store.game)
  console.log('this is here so the linter will not yell', data)
  api.clickedCellThree() // passing the credentials to the ajax call
    .then(ui.clickedCellThreeSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.clickedCellThreeFailure)
}
const onClickCellFour = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // we have to get the value to return from the API at some point, but for now...
  // $('.cellZero').html(store.player)
  // store.game.cells[0] = 'x'
  console.log(store.game)
  console.log('this is here so the linter will not yell', data)
  api.clickedCellFour() // passing the credentials to the ajax call
    .then(ui.clickedCellFourSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.clickedCellFourFailure)
}
const onClickCellFive = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // we have to get the value to return from the API at some point, but for now...
  // $('.cellZero').html(store.player)
  // store.game.cells[0] = 'x'
  console.log(store.game)
  console.log('this is here so the linter will not yell', data)
  api.clickedCellFive() // passing the credentials to the ajax call
    .then(ui.clickedCellFiveSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.clickedCellFiveFailure)
}
const onClickCellSix = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // we have to get the value to return from the API at some point, but for now...
  // $('.cellZero').html(store.player)
  // store.game.cells[0] = 'x'
  console.log(store.game)
  console.log('this is here so the linter will not yell', data)
  api.clickedCellSix() // passing the credentials to the ajax call
    .then(ui.clickedCellSixSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.clickedCellSixFailure)
}
const onClickCellSeven = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // we have to get the value to return from the API at some point, but for now...
  // $('.cellZero').html(store.player)
  // store.game.cells[0] = 'x'
  console.log(store.game)
  console.log('this is here so the linter will not yell', data)
  api.clickedCellSeven() // passing the credentials to the ajax call
    .then(ui.clickedCellSevenSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.clickedCellSevenFailure)
}
const onClickCellEight = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // we have to get the value to return from the API at some point, but for now...
  // $('.cellZero').html(store.player)
  // store.game.cells[0] = 'x'
  console.log(store.game)
  console.log('this is here so the linter will not yell', data)
  api.clickedCellEight() // passing the credentials to the ajax call
    .then(ui.clickedCellEightSuccess) // using the Promise tot ensure order execution
    // .then() afterwards takes the results of the previous .then()
    .catch(ui.clickedCellEightFailure)
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
  $('#one').on('click', onClickCellOne)
  $('#two').on('click', onClickCellTwo)
  $('#three').on('click', onClickCellThree)
  $('#four').on('click', onClickCellFour)
  $('#five').on('click', onClickCellFive)
  $('#six').on('click', onClickCellSix)
  $('#seven').on('click', onClickCellSeven)
  $('#eight').on('click', onClickCellEight)
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
  postCreateGameSuccess,
  onClickCellZero,
  onClickCellOne,
  onClickCellTwo,
  onClickCellThree,
  onClickCellFour,
  onClickCellFive,
  onClickCellSix,
  onClickCellSeven,
  onClickCellEight,
  addHandlers
}
