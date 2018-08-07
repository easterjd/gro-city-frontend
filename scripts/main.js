const render = require('./render/render');
const authorize = require('./authorization/authorize');
const validation = require('./validation/validation.js');
validation.addNameValidation();
validation.addEmailValidation();
validation.addPasswordValidation();
