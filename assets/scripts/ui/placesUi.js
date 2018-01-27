'use strict'
const store = require('../store')
const showPlacesTemplate = require('./place-lists.handlebars')

const getPlacesSuccess = function (data) {
  const showPlaces = showPlacesTemplate({ places: data[Object.keys(data)[0]] })

  $('#content').html(showPlaces)
}

const createPlaceSuccess = function (data) {
  console.log(data)
  console.log('create place success!')
  $('#new-place input[name="place[name]"]').val('')
  $('#new-place input[name="place[address]"]').val('')
  $('#new-place input[name="place[description]"]').val('')
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
  createPlaceSuccess,
  getPlacesSuccess,
  onChangePassSuccess,
  onSignOutSuccess,
  onSignUpFailure,
  onSignInFailure,
  onChangePassFailure,
  onSignOutFailure
}
