'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const getFormFields = require('../../../lib/get-form-fields.js')

// Auth events

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.post(data)
    .then(ui.onAddUserSuccess)
    .catch(ui.onAddUserFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.postSignIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

// this seems like it shouldn't do anything but when
// I comment it out the code no longer runs
// preserving for later refactoring

const postSignInSuccess = (data) => {
  store.user = data.user
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(onSignIn.data)
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// Game events

// Create game
const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const postCreateGameSuccess = (data) => {
  store.game = data.game
}

// Event handlers to respond to users clicking on game cells

const onClickCellZero = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // we have to get the value to return from the API at some point, but for now...
  // $('.cellZero').html(store.player
  if (store.game.cells[0] === '') {
    store.game.cells[0] = 'x'
    // console.log('this is here so the linter will not yell', data)
    api.clickedCellZero()
    .then(ui.clickedCellZeroSuccess)
    .catch(ui.clickedCellZeroFailure)
  } else {
    if (store.game.cells[0] !== '') {
      ui.clickedFullCell()
    }
  }
}

const onClickCellOne = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (store.game.cells[1] !== '') {
    ui.clickedFullCell()
  } else {
    api.clickedCellOne()
    .then(ui.clickedCellOneSuccess)
    .catch(ui.clickedCellOneFailure)
  }
}
const onClickCellTwo = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (store.game.cells[2] !== '') {
    ui.clickedFullCell()
  } else {
    api.clickedCellTwo()
    .then(ui.clickedCellTwoSuccess)
    .catch(ui.clickedCellTwoFailure)
  }
}

const onClickCellThree = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (store.game.cells[3] !== '') {
    ui.clickedFullCell()
  } else {
    api.clickedCellThree()
    .then(ui.clickedCellThreeSuccess)
    .catch(ui.clickedCellThreeFailure)
  }
}

const onClickCellFour = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (store.game.cells[4] !== '') {
    ui.clickedFullCell()
  } else {
    api.clickedCellFour()
    .then(ui.clickedCellFourSuccess)
    .catch(ui.clickedCellFourFailure)
  }
}

const onClickCellFive = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (store.game.cells[5] !== '') {
    ui.clickedFullCell()
  } else {
    api.clickedCellFive()
    .then(ui.clickedCellFiveSuccess)
    .catch(ui.clickedCellFiveFailure)
  }
}

const onClickCellSix = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (store.game.cells[6] !== '') {
    ui.clickedFullCell()
  } else {
    api.clickedCellSix()
    .then(ui.clickedCellSixSuccess)
    .catch(ui.clickedCellSixFailure)
  }
}

const onClickCellSeven = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (store.game.cells[7] !== '') {
    ui.clickedFullCell()
  } else {
    api.clickedCellSeven()
    .then(ui.clickedCellSevenSuccess)
    .catch(ui.clickedCellSevenFailure)
  }
}

const onClickCellEight = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (store.game.cells[8] !== '') {
    ui.clickedFullCell()
  } else {
    api.clickedCellEight()
    .then(ui.clickedCellEightSuccess)
    .catch(ui.clickedCellEightFailure)
  }
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
