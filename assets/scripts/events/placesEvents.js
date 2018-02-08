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
    .then(api.getPlaces) // calls a refresh of all entries
    .then(ui.getPlacesSuccess) // inserts refreshed data to the page
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

  // onUpdatePlace retrieves the entry's ID and form data and passes it on to api.updatePlace. A replace method is called on the incoming description data as a workaround fix to the unexplained whitespace issue.
  // The form by itself is auto-populated with the entry's current value via handlebars, however, the data that auto-populates into the textarea has 8 spaces inserted after every \n. I don't know if this is a side effect of handlebars or of textarea itself. Searching for a fix has given no results yet

  // clean long whitespaces from description
  data.place.description = data.place.description.replace(/\s{3,}/g, '\n')
  api.updatePlace(data, id)
    // .then(ui.toggleUpdate)
    .then(ui.updatePlaceSuccess)
    .then(api.getPlaces)// calls a refresh of all entries
    .then(ui.getPlacesSuccess) // inserts refreshed data to the page
    .catch(ui.updatePlaceFail)
}

const onGetPlaces = function (event) {
  event.preventDefault()
  // console.log('get places triggered')
  api.getPlaces()
    .then(ui.getPlacesSuccess)
    .catch(ui.getPlacesFail)
}

const onDeletePlace = function (event) {
  event.preventDefault()
  const id = getDataEntryId(event.target)
  // console.log('delete clicked at ', id)
  api.deletePlace(id)
    .then(ui.deletePlaceSuccess)
    .then(api.getPlaces) // calls a refresh of all entries
    .then(ui.getPlacesSuccess) // inserts refreshed data to the page
    .catch(ui.deletePlaceFail)
}

const addHandler = function (event) {
  $('#new-place').on('submit', onCreatePlace)
  $('#get-places').on('click', onGetPlaces)
  $('body').on('submit', '.update-place', onUpdatePlace)
  $('body').on('click', '.delete', onDeletePlace)
}

module.exports = {
  addHandler
}
