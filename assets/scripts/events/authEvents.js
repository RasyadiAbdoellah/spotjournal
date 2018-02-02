'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('../api/authApi')
const ui = require('../ui/authUi')

const toggleSignInSignUp = function () {
  $('#sign-in').toggleClass('hidden')
  $('#sign-up').toggleClass('hidden')
}

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('sign up triggered')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('sign in triggered')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePass = function (event) {
  event.preventDefault()
  // console.log('change pw triggered')
  const data = getFormFields(event.target)
  // console.log(data)
  api.changePass(data)
    .then(ui.onChangePassSuccess)
    .catch(ui.onChangePassFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('sign out triggered')
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const addHandler = function (event) {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePass)
  $('#sign-out').on('submit', onSignOut)
  $('.sign-in-up-toggle').on('click', toggleSignInSignUp)
}

module.exports = {
  addHandler
}
