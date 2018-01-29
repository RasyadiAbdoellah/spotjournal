'use strict'
const store = require('../store')
const showPlacesTemplate = require('./place-lists.handlebars')

const sortPlaces = function (a, b) {
  return a.id - b.id
}

const getPlacesSuccess = function (data) {
  const placeArray = data.places.sort(sortPlaces)
  const showPlaces = showPlacesTemplate({ places: placeArray })

  $('#content').html(showPlaces)
}

const toggleUpdate = function (id) {
  $('#update-' + id + '-container').slideToggle()
}

const createPlaceSuccess = function (data) {
  console.log(data)
  console.log('create place success!')
  $('#new-place input[name="place[name]"]').val('')
  $('#new-place input[name="place[address]"]').val('')
  $('#new-place input[name="place[description]"]').val('')
}

module.exports = {
  createPlaceSuccess,
  getPlacesSuccess,
  toggleUpdate
}
