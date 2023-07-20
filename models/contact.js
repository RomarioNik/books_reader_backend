import { Schema, model } from "mongoose";
import {handleMongeeseError} from "../helpers/index.js";
import Joi from "joi";

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
    required: true,
  },
}, {
    versionKey: false,
    timestamps: true,
});

contactSchema.post("save", handleMongeeseError);

const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
  });

  const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
  })

export const schemas = {
    addSchema,
    updateFavoriteSchema,
}

export const Contact = model("contact", contactSchema);

// export default {
//     Contact,
//     schemas,
// };
