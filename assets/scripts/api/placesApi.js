'use strict'
const config = require('../config')
const store = require('../store')

const createPlace = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/places',
    method: 'POST',
    headers: { Authorization: 'Token token=' + store.user.token },
    data
  })
}

const getPlaces = function () {
  return $.ajax({
    url: config.apiOrigin + '/places',
    method: 'GET',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

const updatePlace = function (data, id) {
  console.log(data, id)
  return $.ajax({
    url: config.apiOrigin + '/places/' + id,
    method: 'PATCH',
    headers: { Authorization: 'Token token=' + store.user.token },
    data
  })
}

module.exports = {
  createPlace,
  getPlaces,
  updatePlace
}
