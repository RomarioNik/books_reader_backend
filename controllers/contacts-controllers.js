import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";
import {Contact} from "../models/contact.js";

const getAll = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  // const contact = await Contact.findOne({_id: id});
  const contact = await Contact.findById(id);
  if (!contact) throw HttpError(404);
  res.json(contact);
};

const add = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json(contact);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) throw HttpError(404);

  res.status(200).json({
    message: "contact deleted",
  });
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findByIdAndUpdate(id, req.body, {new: true});
  if (!contact) throw HttpError(404);
  res.json(contact);
};

const updateFavorite = async (req, res) => {
  const { id} = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
  if (!result) throw HttpError(404);
  res.json(result);
}

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
};
