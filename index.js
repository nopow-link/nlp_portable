import Axios from 'axios'
import trim from "trim"
import core_js from "core-js"

// Setup Axios
Axios.defaults.headers = {'X-Requested-With': 'XMLHttpRequest'}

// Librairy entrypoint
import NPL from './srcs/npl.js'

export { Axios, NPL, trim, core_js }

