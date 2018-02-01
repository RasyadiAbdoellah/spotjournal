'use strict'
const store = require('../store')
const showPlacesTemplate = require('./place-lists.handlebars')

const sortPlacesAscending = (a, b) => {
  return a.id - b.id
}

const modifyMessageBox = (divId, text, htmlClass) => {
  $(divId).text(text)
  $(divId).removeClass().addClass(htmlClass)
    .slideDown(200).delay(3500).slideUp(200)
}

const getPlacesSuccess = function (data) {
  const placeArray = data.places.sort(sortPlacesAscending)
  const showPlaces = showPlacesTemplate({ places: placeArray })

  $('#content').html(showPlaces)
}

const createPlaceSuccess = function (data) {
  $('#new-name').val('')
  $('#new-address').val('')
  $('#new-descrip').val('')
}

const updatePlaceSuccess = function () {
  modifyMessageBox('#user-message-box', 'Place modified!', 'alert alert-success')
}

const deletePlaceSuccess = function () {
  modifyMessageBox('#user-message-box', 'Place deleted!', 'alert alert-success')
}

const createPlaceFail = function () {
  modifyMessageBox('#user-message-box', 'Error creating new place! Try again later.', 'alert alert-danger')
}

module.exports = {
  createPlaceSuccess,
  getPlacesSuccess,
  updatePlaceSuccess,
  deletePlaceSuccess,
  createPlaceFail
}
