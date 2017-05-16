'use strict'
const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.post(data)
    .then(ui.onAddUserSuccess)
    .catch(ui.onAddUserFailure)

  // const input = $('#credentials[email]').val()
  // console.log(input)

//  api.signUp(data)
//  .done(ui.success)
//  .fail(ui.fail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.postSignIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  // $('#sign-in').on('submit', onSignIn);
  // $('#sign-out').on('submit', onSignOut);
//  $('#change-password').on('submit', onChangePassword);
}

module.exports = {
  onSignUp,
  onSignIn,
  addHandlers
}
