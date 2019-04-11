'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateAccount = (event) => {
  console.log('data is fun')
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.onCreateAccount(formData)
    .then(ui.onCreateAccountSuccess)
    .then(onGetAccounts)
    .catch(ui.onCreateAccountFailure)
}

const onGetAccounts = function () {
  event.preventDefault()
  api.onGetAccounts()
    .then(ui.onGetAccountSuccess)
    .catch(ui.onGetAccountFailure)
}

const onUpdateAccount = function (event) {
  event.preventDefault()
  console.log('Events makes Sense!')
  const accountId = event.target.id
  const formData = getFormFields(event.target)
  $('#all' + accountId).hide()
  api.onUpdateAccount(event, formData)
    .then(ui.onUpdateAccountSuccess)
    .catch(ui.onUpdateAccountFailure)
}

module.exports = {
  onCreateAccount,
  onGetAccounts,
  onUpdateAccount
}
