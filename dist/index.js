
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./wp-block-renderer.cjs.production.min.js')
} else {
  module.exports = require('./wp-block-renderer.cjs.development.js')
}
