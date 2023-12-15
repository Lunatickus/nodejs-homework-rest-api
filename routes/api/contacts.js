const express = require("express");

const ctrl = require("../../controllers/contacts");

const {validateBody, isValidId, authenticate, isOwner} = require("../../middlewares");

const {schemas} = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isOwner, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", authenticate, isOwner, isValidId, ctrl.deleteById);

router.put("/:contactId", authenticate, isOwner, isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.patch("/:contactId/favorite", authenticate, isOwner, isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateStatusContact);

module.exports = router;
