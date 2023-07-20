import express from "express";

import contactsControllers from "../../controllers/contacts-controllers.js";
import {schemas} from "../../models/contact.js";
import { validateBody } from "../../decorators/index.js";
import {isValidId} from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAll);

contactsRouter.get("/:id", isValidId, contactsControllers.getById);

contactsRouter.post(
  "/",
  validateBody(schemas.addSchema),
  contactsControllers.add
);

contactsRouter.delete("/:id", isValidId, contactsControllers.deleteById);

contactsRouter.put(
  "/:id",
isValidId,
  validateBody(schemas.addSchema),
  contactsControllers.updateById
);

contactsRouter.patch(
    "/:id/favorite", //"/:id/field to update"
  isValidId,
    validateBody(schemas.updateFavoriteSchema),
    contactsControllers.updateFavorite
  );

export default contactsRouter;
