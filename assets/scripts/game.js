// 'use strict'
//
// const api = require('.auth/api.js')
// const store = require('./store.js')
// const ui = require('.auth/ui.js')
//
// let gameBoard = ['', '', '', '', '', '', '', '', '']
//
// const newGame = function () {
//   console.log('')
//   $('#start-new-game').on('click', startGame)
// }
//
// const startGame = function () {
//   console.log('startGame function ran')
//   api.createGame()
//     .then((gameData) => {
//       console.log('game ID is: ', gameData.game.id)
//       store.game = gameData.game
//       $('.gameBoard').show()
//       resetGame()
//       addHandlers()
//     })
//     .then(ui.createGameSuccess)
//     .catch(ui.createGameFailure)
// }
//
// module.exports = {
//   gameBoard,
//   newGame,
//   startGame
// }
