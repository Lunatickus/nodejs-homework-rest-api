const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const isOwner = require("./isOwner");
const upload = require("./upload");

module.exports = {
  validateBody,
  isValidId,
  authenticate,
  isOwner,
  upload,
};
