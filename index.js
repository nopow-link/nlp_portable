import JQuery from 'jquery'
import Axios from 'axios'

// Load JQuery globaly
const strftime  = require('strftime')
const $         = JQuery
window.jQuery   = $

// Setup Axios
Axios.defaults.headers = {'X-Requested-With': 'XMLHttpRequest'}

// Librairy entrypoint
import NPL from './srcs/npl.js'

export { JQuery, Axios, NPL, $ }

