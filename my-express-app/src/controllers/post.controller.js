
const knex = require("../models/knex");

const index = async (_req, res) => {
  const data = await knex("posts").select("id", "title", "content");
  return res.send({ message: "Success", data });
};

const getById = async (req, res) => {
  const data = await knex("posts").where({ id: req.params.id }).first();
  return res.send({ message: "Berhasil", data });
};

const deleteIndex = async (_req, res) => {
  const data = await knex("posts").del();
  return res.send({ message: "Success Delete All", data });
};

const deleteGetById = async (req, res) => {
  const data = await knex("posts").where({ id: req.params.id }).del();
  return res.send({ message: "Berhasil", data });
};

const updateIndex = async (req, res) => {
  const data = await knex("posts").update(req.body);
  return res.send({ message: "Success Update All", data });
};

const updateGetById = async (req, res) => {
  const data = await knex("posts").where({ id: req.params.id }).update(req.body);
  return res.send({ message: "Berhasil", data });
};

const putIndex = async (req, res) => {
  const data = await knex("posts").update(req.body);
  return res.send({ message: "Success Update All", data });
};

const putGetById = async (req, res) => {
  const data = await knex("posts").where({ id: req.params.id }).update(req.body);
  return res.send({ message: "Berhasil", data });
};

module.exports = {
  index,
  getById,
  deleteIndex,
  deleteGetById,
  updateIndex,
  updateGetById,
  putIndex,
  putGetById
};