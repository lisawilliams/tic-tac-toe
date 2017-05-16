'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  api.signUp(data)
  .done(ui.success)
  .fail(ui.fail)
}

module.exports = {
  onSignUp
}
