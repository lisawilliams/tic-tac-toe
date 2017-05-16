'use strict'

const app = require('./../app')
// functions that are API calls

const post = function (data) {
  return $.ajax({
    url: app.host + '/users/',
    method: 'POST',
    data
  })
}

module.exports = {
  post
}
