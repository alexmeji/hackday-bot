'use strict'

const requireDirectory = require('require-directory')

// An index files for the handlers, replacing the '-template' portion of the file
module.exports = requireDirectory(module, { rename: name => name.replace('-template', '') })
