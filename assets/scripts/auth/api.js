'use strict'

const app = require('./../app')
// functions that are API calls

const post = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data
  })
}

module.exports = {
  post
}
