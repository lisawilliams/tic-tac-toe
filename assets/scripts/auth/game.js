'use strict'

const store = require('./../store')
const ui = require('./ui')

// store.game.cells[7]

const xWinsGame = function () {
  if ((store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X')) {
    console.log('x won game')
  } else {
    // return false
    ui.xLost()
  }
}

module.exports = {
  xWinsGame
}
