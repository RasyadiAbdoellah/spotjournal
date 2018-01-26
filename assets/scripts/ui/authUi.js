'use strict'
const store = require('../store')

// -------------------UI FUNCTIONS BELOW -------------------------
// Functions below are mostly for UI, with only onSignInSuccess having an api call to get stats.

const onSignUpSuccess = function (data) {
  console.log(data)
  // clear email, pw, pw_confirm input
  $('#sign-up input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password]"]').val('')
  $('#sign-up input[name="credentials[password_confirmation]"]').val('')
  console.log('sign up success!')
}

const onSignInSuccess = function (data) {
  console.log(data)
  store.user = data.user
  // clear email, pw input
  $('#sign-in input[name="credentials[email]"]').val('')
  $('#sign-in input[name="credentials[password]"]').val('')
  console.log('sign in success!')
}

const onChangePassSuccess = function () {
  console.log('pw changed')
  // clear input
  $('#change-password input[name="passwords[old]"]').val('')
  $('#change-password input[name="passwords[new]"]').val('')
}

const onSignOutSuccess = function () {
  store.user = null
  store.game = null
  store.games = null
  console.log('logged out')
}

const onSignUpFailure = function (error) {
  const statusCode = error.status.toString()
  // display failure messages
  if (statusCode.startsWith('4')) {
  } else if (statusCode.startsWith('5')) {
  }
}

const onSignInFailure = function (error) {
  const statusCode = error.status.toString()
  // display failure messages
  if (statusCode.startsWith('4')) {
  } else if (statusCode.startsWith('5')) {
  }
}

const onChangePassFailure = function (error) {
  const statusCode = error.status.toString()
  // display failure messages
  if (statusCode.startsWith('4')) {
  } else if (statusCode.startsWith('5')) {
  }
}

const onSignOutFailure = function (error) {
  const statusCode = error.status.toString()
  // display failure messages
  if (statusCode.startsWith('4')) {
  } else if (statusCode.startsWith('5')) {
  }
}
module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePassSuccess,
  onSignOutSuccess,
  onSignUpFailure,
  onSignInFailure,
  onChangePassFailure,
  onSignOutFailure
}
