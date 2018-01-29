'use strict'
const store = require('../store')
const showPlacesTemplate = require('./place-lists.handlebars')
const placesApi = require('../api/placesApi')
const placesUi = require('./placesUi')

// -------------------UI FUNCTIONS BELOW -------------------------

const onSignUpSuccess = function (data) {
  console.log(data)
  // clear email, pw, pw_confirm input
  $('#sign-up input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password]"]').val('')
  $('#sign-up input[name="credentials[password_confirmation]"]').val('')
  // console.log('sign up success!')
}

const onSignInSuccess = function (data) {
  console.log(data)
  store.user = data.user
  // clear email, pw input
  $('#sign-in input[name="credentials[email]"]').val('')
  $('#sign-in input[name="credentials[password]"]').val('')
  // hide sign-in screen, show user screen
  $('#landing').addClass('hidden')
  $('#user-view').removeClass('hidden')

  // console.log('sign in success!')
  placesApi.getPlaces()
    .then(placesUi.getPlacesSuccess)
}

const onChangePassSuccess = function () {
  console.log('pw changed')
  // clear input
  $('#change-password input[name="passwords[old]"]').val('')
  $('#change-password input[name="passwords[new]"]').val('')
}

const onSignOutSuccess = function () {
  $('#landing').removeClass('hidden')
  $('#user-view').addClass('hidden')
  store.user = null
  // console.log('logged out')
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
