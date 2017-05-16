'use strict'

// const api = require('./api')
// const ui = require('./ui')

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

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  // $('#sign-in').on('submit', onSignIn);
  // $('#sign-out').on('submit', onSignOut);
//  $('#change-password').on('submit', onChangePassword);
}

module.exports = {
  onSignUp,
  addHandlers
}
