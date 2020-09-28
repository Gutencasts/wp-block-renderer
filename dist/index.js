
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./block-renderer.cjs.production.min.js')
} else {
  module.exports = require('./block-renderer.cjs.development.js')
}
