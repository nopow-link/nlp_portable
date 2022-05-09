import JQuery from 'jquery'
import Axios from 'axios'
import trim from "trim"
import core_js from "core-js"

// Load JQuery globaly
const strftime  = require('strftime')
const $         = JQuery
window.jQuery   = $

// Setup Axios
Axios.defaults.headers = {'X-Requested-With': 'XMLHttpRequest'}

// Librairy entrypoint
import NPL from './srcs/npl.js'

export { JQuery, Axios, NPL, $, trim, core_js }

