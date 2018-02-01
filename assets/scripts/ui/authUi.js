'use strict'
const store = require('../store')
const showPlacesTemplate = require('./place-lists.handlebars')
const placesApi = require('../api/placesApi')
const placesUi = require('./placesUi')

// -------------------UI FUNCTIONS BELOW -------------------------

const modifyMessageBox = (divId, text, htmlClass) => {
  $(divId).text(text)
  $(divId).removeClass().addClass(htmlClass)
    .slideDown(200).delay(3500).slideUp(200)
}

const onSignUpSuccess = function (data) {
  // console.log(data)
  // clear email, pw, pw_confirm input
  $('#sign-up input[name="credentials[email]"]').val('')
  $('#sign-up input[name="credentials[password]"]').val('')
  $('#sign-up input[name="credentials[password_confirmation]"]').val('')
  // console.log('sign up success!')

  modifyMessageBox('#landing-message-box', 'Sign up successful! You can now sign in.', 'alert alert-success')
}

const onSignInSuccess = function (data) {
  // console.log(data)
  store.user = data.user
  // clear email, pw input
  $('#sign-in input[name="credentials[email]"]').val('')
  $('#sign-in input[name="credentials[password]"]').val('')
  // hide sign-in screen, show user screen
  $('#landing').addClass('hidden')
  $('#user-view').removeClass('hidden')
  // console.log('sign in success!')
  modifyMessageBox('#user-message-box', 'Welcome!', 'alert alert-success')

  placesApi.getPlaces()
    .then(placesUi.getPlacesSuccess)
}

const onChangePassSuccess = function () {
  // console.log('pw changed')
  // clear input
  $('#change-password input[name="passwords[old]"]').val('')
  $('#change-password input[name="passwords[new]"]').val('')

  modifyMessageBox('#user-message-box', 'Password Successfully changed!', 'alert alert-success')
}

const onSignOutSuccess = function () {
  $('#landing').removeClass('hidden')
  $('#user-view').addClass('hidden')
  store.user = null
  // console.log('logged out')
  modifyMessageBox('#landing-message-box', 'Logged out!', 'alert alert-success')
}

const onSignUpFailure = function (error) {
  const statusCode = error.status.toString()
  // display failure messages
  if (statusCode.startsWith('4')) {
    modifyMessageBox('#landing-message-box', 'Username already taken! Try a different one.', 'alert alert-danger')
  } else if (statusCode.startsWith('5')) {
    modifyMessageBox('#landing-message-box', 'Problems connecting to server! Try again later.', 'alert alert-danger')
  }
}

const onSignInFailure = function (error) {
  const statusCode = error.status.toString()
  // display failure messages
  if (statusCode.startsWith('4')) {
    modifyMessageBox('#landing-message-box', 'Username/password incorrect. Try again!', 'alert alert-danger')
  } else if (statusCode.startsWith('5')) {
    modifyMessageBox('#landing-message-box', 'Problems connecting to server! Try again later.', 'alert alert-danger')
  }
}

const onChangePassFailure = function (error) {
  const statusCode = error.status.toString()
  // display failure messages
  if (statusCode.startsWith('4')) {
    modifyMessageBox('#user-message-box', 'Incorrect old password!', 'alert alert-danger')
  } else if (statusCode.startsWith('5')) {
    modifyMessageBox('#user-message-box', 'Problems connecting to server! Try again later', 'alert alert-danger')
  }
}

const onSignOutFailure = function (error) {
  const statusCode = error.status.toString()
  // display failure messages
  if (statusCode.startsWith('4')) {
    modifyMessageBox('#user-message-box', 'I\'m letting you know that the app shouldn\'t even be capable of giving you this', 'alert alert-danger')
  } else if (statusCode.startsWith('5')) {
    modifyMessageBox('#user-message-box', 'I\'m letting you know that the app shouldn\'t even be capable of giving you this', 'alert alert-danger')
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
