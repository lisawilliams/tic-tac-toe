'use strict'

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

const signOutSuccess = () => {
  console.log('signOut success ran. and nothing was returned')
  store.user = null
  $('#signOutSuccessPrompt').text('You have signed out. See you soon!')
}

const signOutFailure = (error) => {
  console.log('signOut failure ran. error is :', error)
  $('#signOutFailurePrompt').text('Hm. Signout did not work. Try again?')
}

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

const createGameSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
  // store.game = response.game
  $('#createGameSuccessPrompt').text('You have a new game. Good luck.')
}

const createGameFailure = (response) => {
  console.log('Boo, it failed')
  console.log(response)
  console.log('store.user console log data is ' + store.user)
  $('#createGameFailurePrompt').text('Creating a new game did not work. Check your Internet connection.')
}

const updateGameSuccess = (response) => {
  console.log('yayyyyy we did it updateGame worked')
  console.log(response)
  store.game = response.game
  console.log('store.game console log data is  :)' + store.game)
}

const updateGameFailure = (response) => {
  console.log('Boo, updateGame failed')
  console.log(response)
  console.log('store.user console log data is ' + store.game)
}

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
  indexSuccess,
  indexFailure
}
