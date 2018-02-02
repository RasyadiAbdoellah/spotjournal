'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('../api/placesApi')
const ui = require('../ui/placesUi')

const onCreatePlace = function (event) {
  event.preventDefault()
  // console.log('create place triggered')
  const data = getFormFields(event.target)
  api.createPlace(data)
    .then(ui.createPlaceSuccess)
    .then(api.getPlaces)
    .then(ui.getPlacesSuccess)
    .then($('#new-place-modal').modal('hide'))
    .catch(ui.createPlaceFail)
}

const getDataEntryId = (target) => {
  return $(target).parents('.entry').attr('data-id')
}

const onUpdatePlace = function (event) {
  event.preventDefault()
  // console.log('update place triggered')
  const id = getDataEntryId(event.target)
  const data = getFormFields(event.target)
  // console.log(data)

  // clean long whitespaces from description
  data.place.description = data.place.description.replace(/\s{3,}/g, '\n')
  api.updatePlace(data, id)
    // .then(ui.toggleUpdate)
    .then(ui.updatePlaceSuccess)
    .then(api.getPlaces)
    .then(ui.getPlacesSuccess)
    .catch(ui.updatePlaceFail)
}

const onGetPlaces = function (event) {
  event.preventDefault()
  // console.log('get places triggered')
  api.getPlaces()
    .then(ui.getPlacesSuccess)
    .catch(ui.getPlacesFail)
}

// const onShowUpdate = function (event) {
//   event.preventDefault()
//   const id = getDataEntryId(event.target)
//   // console.log('show update form clicked', id)
//   ui.toggleUpdate(id)
// }

const onDeletePlace = function (event) {
  event.preventDefault()
  const id = getDataEntryId(event.target)
  // console.log('delete clicked at ', id)
  api.deletePlace(id)
    .then(ui.deletePlaceSuccess)
    .then(api.getPlaces)
    .then(ui.getPlacesSuccess)
    .catch(ui.deletePlaceFail)
}

const addHandler = function (event) {
  $('#new-place').on('submit', onCreatePlace)
  $('#get-places').on('click', onGetPlaces)
  // $('body').on('click', '.modify', onShowUpdate)
  $('body').on('submit', '.update-place', onUpdatePlace)
  $('body').on('click', '.delete', onDeletePlace)
}

module.exports = {
  addHandler
}
