const { Contact } = require("../models/contact");

const { HttpError } = require("../helpers");

const isOwner = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;
  try {
    const contact = await Contact.findOne({_id: contactId, owner});
    if (!contact) {
      next(HttpError(404));
    }
    next();
  } catch {
    next(HttpError(404));
  }
};

module.exports = isOwner;
