'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('../api/placesApi')
const ui = require('../ui/placesUi')

const onCreatePlace = function (event) {
  event.preventDefault()
  console.log('create place triggered')
  const data = getFormFields(event.target)
  api.createPlace(data)
    .then(api.getPlaces)
    .then(ui.getPlacesSuccess)
    .catch(ui.createPlaceFailure)
}

const onUpdatePlace = function (event) {
  event.preventDefault()
  console.log('update place triggered')
  const id = $(event.target).parents('.entry').attr('data-id')
  const data = getFormFields(event.target)
  api.updatePlace(data, id)
    .then(ui.createPlaceSuccess)
    .then(api.getPlaces)
    .then(ui.getPlacesSuccess)
    .catch(ui.createPlaceFailure)
}

const onGetPlaces = function (event) {
  event.preventDefault()
  // console.log('get places triggered')
  api.getPlaces()
    .then(ui.getPlacesSuccess)
    .catch(ui.getPlacesFailure)
}

const addHandler = function (event) {
  $('#new-place').on('submit', onCreatePlace)
  $('#get-places').on('click', onGetPlaces)
  $('body').on('submit', '.update-place', onUpdatePlace)
  // $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandler
}
