'use strict'

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

const onAddUserSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
}

const onAddUserFailure = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
}

const onSignInSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
}

const onSignInFailure = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
}

const signOutSuccess = () => {
  console.log('signOut success ran. and nothing was returned')
  store.user = null
}

const signOutFailure = (error) => {
  console.log('signOut failure ran. error is :', error)
}

module.exports = {
  failure,
  success,
  onAddUserSuccess,
  onAddUserFailure,
  onSignInSuccess,
  onSignInFailure,
  signOutSuccess,
  signOutFailure
}
