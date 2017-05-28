'use strict'
// const game = require('./game')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected')
}

// to call, use:
// resetForm($('#myform')); // by id, recommended
// resetForm($('form[name=myName]')); // by name

const store = require('../store')

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

// Auth functions

// Add user

const onAddUserSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
  $('#addUserSuccessPrompt').text('You have signed up!')
}

const onAddUserFailure = (response) => {
  console.log('boooo it failed')
  console.log(response)
  $('#addUserFailurePrompt').text('Signup failed. Try again.')
}

// Sign in user

const onSignInSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
  store.user = response.user
  console.log('store.user console log data is ' + store.user)
  resetForm($('#sign-in-form'))
  console.log('Is the form empty now?')
}

const onSignInFailure = (response) => {
  console.log('boo it failed')
  console.log(response)
  $('#prompt').text('Sign In Failed')
}

// Sign out user

const signOutSuccess = () => {
  console.log('signOut success ran. and nothing was returned')
  store.user = null
  $('#signOutSuccessPrompt').text('You have signed out. See you soon!')
}

const signOutFailure = (error) => {
  console.log('signOut failure ran. error is :', error)
  $('#signOutFailurePrompt').text('Hm. Signout did not work. Try again?')
}

// Change user password

const changePasswordSuccess = () => {
  console.log('changePassword success ran. and nothing was returned')
  store.user = null
  resetForm($('#change-password'))
  $('#changePasswordSuccessPrompt').text('You have changed your password.')
}

const changePasswordFailure = (error) => {
  console.log('changePassword failure ran. error is :', error)
  $('#changePasswordFailurePrompt').text('Hm. That did not work. Try again?')
}

// Gameplay functions

// Create game

const createGameSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
  // store.game = response.game
  $('#usermessage').text('You have a new game. Good luck.')
}

const createGameFailure = (response) => {
  console.log('Boo, it failed')
  console.log(response)
  console.log('store.user console log data is ' + store.user)
  $('#createGameFailurePrompt').text('Creating a new game did not work. Check your Internet connection.')
}

// Update game (may be refactored to eliminate multiple cell functions, or eliminated)

const updateGameSuccess = (response) => {
  console.log('yayyyyy we did it updateGame worked')
  console.log(response)
  store.game = response.game
  console.log('store.game console log data is  :' + store.game)
}

const updateGameFailure = (response) => {
  console.log('Boo, updateGame failed')
  console.log(response)
  console.log('store.user console log data is ' + store.game)
}

// UI functions for individual cell click functions

// Cell Zero

const clickedCellZeroSuccess = (response) => {
  console.log('User clicked Cell Zero and turn completed')
  console.log(response)
  store.game = response.game
  console.log('store.game console.log data is: ' + store.game)
  $('.cellZero').html(store.player)
  $('#usermessage').text(store.player + ' chose Cell Zero.')
}

const clickedCellZeroFailure = (error) => {
  console.log('User clicked Cell Zero')
  console.log(error)
  console.log('store.game console.log data is: ' + store.game)
}

// Cell One

const clickedCellOneSuccess = (response) => {
  console.log('User clicked Cell One and turn completed')
  console.log(response)
  store.game = response.game
  console.log('store.game console.log data is: ' + store.game)
  $('.cellOne').html(store.player)
  $('#usermessage').text(store.player + ' chose Cell One.')
}

const clickedCellOneFailure = (error) => {
  console.log('User clicked Cell One')
  console.log(error)
  console.log('store.game console.log data is: ' + store.game)
}

// Cell Two

const clickedCellTwoSuccess = (response) => {
  console.log('User clicked Cell Two and turn completed')
  console.log(response)
  store.game = response.game
  $('.cellTwo').html(store.player)
  if (store.game.cells[2] !== '') {
    xWinsGame()
  } else {
    $('#usermessage').text(store.player + ' chose Cell Two.')
  }
}

const clickedCellTwoFailure = (error) => {
  console.log('User clicked Cell Two')
  console.log(error)
  console.log('store.game console.log data is: ' + store.game)
}

// Cell Three

const clickedCellThreeSuccess = (response) => {
  console.log('User clicked Cell Three and turn completed')
  console.log(response)
  store.game = response.game
  console.log('store.game console.log data is: ' + store.game)
  $('.cellThree').html(store.player)
  $('#usermessage').text(store.player + ' chose Cell Three.')
}

const clickedCellThreeFailure = (error) => {
  console.log('User clicked Cell Three')
  console.log(error)
  console.log('store.game console.log data is: ' + store.game)
}

// Cell Four

const clickedCellFourSuccess = (response) => {
  console.log('User clicked Cell Four and turn completed')
  console.log(response)
  store.game = response.game
  console.log('store.game console.log data is: ' + store.game)
  $('.cellFour').html(store.player)
  $('#usermessage').text(store.player + ' chose Cell Four.')
}

const clickedCellFourFailure = (error) => {
  console.log('User clicked Cell Four')
  console.log(error)
  console.log('store.game console.log data is: ' + store.game)
}

// Cell Five

const clickedCellFiveSuccess = (response) => {
  console.log('User clicked Cell Five and turn completed')
  console.log(response)
  store.game = response.game
  console.log('store.game console.log data is: ' + store.game)
  $('.cellFive').html(store.player)
  $('#usermessage').text(store.player + ' chose Cell Five.')
}

const clickedCellFiveFailure = (error) => {
  console.log('User clicked Cell Five')
  console.log(error)
  console.log('store.game console.log data is: ' + store.game)
}

// Cell Six

const clickedCellSixSuccess = (response) => {
  console.log('User clicked Cell Six and turn completed')
  console.log(response)
  store.game = response.game
  console.log('store.game console.log data is: ' + store.game)
  $('.cellSix').html(store.player)
  $('#usermessage').text(store.player + ' chose Cell Six.')
}

const clickedCellSixFailure = (error) => {
  console.log('User clicked Cell Six')
  console.log(error)
  console.log('store.game console.log data is: ' + store.game)
}

// Cell Seven

const clickedCellSevenSuccess = (response) => {
  console.log('User clicked Cell Seven and turn completed')
  console.log(response)
  store.game = response.game
  console.log('store.game console.log data is: ' + store.game)
  $('.cellSeven').html(store.player)
  $('#usermessage').text(store.player + ' chose Cell Seven.')
}

const clickedCellSevenFailure = (error) => {
  console.log('User clicked Cell Seven')
  console.log(error)
  console.log('store.game console.log data is: ' + store.game)
}

// Cell Eight

const clickedCellEightSuccess = (response) => {
  console.log('User clicked Cell Two and turn completed')
  console.log(response)
  store.game = response.game
  console.log('store.game console.log data is: ' + store.game)
  $('.cellEight').html(store.player)
  $('#usermessage').text(store.player + ' chose Cell Eight.')
}

const clickedCellEightFailure = (error) => {
  console.log('User clicked Cell Eight')
  console.log(error)
  console.log('store.game console.log data is: ' + store.game)
}

// Clicked cell that's already been played

const clickedFullCell = (response) => {
  console.log('User clicked cell that has already been played')
  console.log(response)
  $('#usermessage').text('Someone already made that move. Try another cell.')
}
// placeholder function
const placeholder = (response) => {
  console.log('Placeholder function ran')
}

// detect win/loss/draw

const xWinsGame = function () {
  if ((store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X')) {
    console.log('x won game')
  } else {
    // return false
    xLost()
  }
}

const xLost = (response) => {
  console.log('X lost game')
}

// Index

const indexSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
  store.game = response.game
  console.log('store.user console log data is ' + store.game)
}

const indexFailure = (response) => {
  console.log('Boo, it failed')
  console.log(response)
  store.game = response.game
  console.log('store.user console log data is ' + store.game)
}

module.exports = {
  resetForm,
  failure,
  success,
  onAddUserSuccess,
  onAddUserFailure,
  onSignInSuccess,
  onSignInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  clickedCellZeroSuccess,
  clickedCellZeroFailure,
  clickedCellOneSuccess,
  clickedCellOneFailure,
  clickedCellTwoSuccess,
  clickedCellTwoFailure,
  clickedCellThreeSuccess,
  clickedCellThreeFailure,
  clickedCellFourSuccess,
  clickedCellFourFailure,
  clickedCellFiveSuccess,
  clickedCellFiveFailure,
  clickedCellSixSuccess,
  clickedCellSixFailure,
  clickedCellSevenSuccess,
  clickedCellSevenFailure,
  clickedCellEightSuccess,
  clickedCellEightFailure,
  clickedFullCell,
  placeholder,
  xWinsGame,
  xLost,
  indexSuccess,
  indexFailure
}
