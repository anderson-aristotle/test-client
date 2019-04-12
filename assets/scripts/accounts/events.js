'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetAccounts = function () {
  api.onGetAccounts()
    .then(ui.onGetAccountSuccess)
    .catch(ui.onGetAccountFailure)
}

const onCreateAccount = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.onCreateAccount(formData)
    .then(ui.onCreateAccountSuccess)
    .then(() => { onGetAccounts() })
    .catch(ui.onCreateAccountFailure)
}

const onUpdateAccount = function (event) {
  event.preventDefault()
  const accountId = event.target.id
  const formData = getFormFields(event.target)
  $('#all' + accountId).hide()
  api.onUpdateAccount(event, formData)
    .then(ui.onUpdateAccountSuccess)
    .catch(ui.onUpdateAccountFailure)
}

const onDeleteAccount = function () {
  event.preventDefault()
  const accountId = $(event.target).data('id')
  console.log(accountId)
  $('#all' + accountId).hide()
  api.onDeleteAccount(accountId)
    .then(ui.onDeleteAccountSuccess)
    .catch(ui.onDeleteAccountFailure)
}

module.exports = {
  onCreateAccount,
  onGetAccounts,
  onUpdateAccount,
  onDeleteAccount
}
