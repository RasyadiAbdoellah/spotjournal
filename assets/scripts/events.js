const config = require('./config')

const apiTest = () => {
  console.log('apitest running')
  $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: {
      credentials: {
        email: 'ras1',
        password: '123',
        password_confirmation: '123'
      }
    }
  }).then(data => {
    console.log('pinging api')
    console.log(data)
  })
    .catch(errors => console.log(errors))
}

const addHandler = function (event) {
  $('.api-test').on('click', apiTest)
}

module.exports = {
  addHandler
}
