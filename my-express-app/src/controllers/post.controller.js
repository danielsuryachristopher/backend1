

//const { all: getAllPosts, byId: getById } = require ("../models/post");

// * @param {import ('express').Request} _req
// * @param {import ('express').Response} res
// * @param {import ('express').NextFunction} _next

// const index = (_req, res, _next) => {
//     return res.send({
//         message : "Success",
//         data: getAllPosts(),
//     });
// };

// const byId = (_req, res) => {
//     const ambilId = _req.params.id;
//     return res.send({
//         message: "Berhasil",
//         data: getById(+ambilId),
//     })
// }

// module.exports = { index, byId };




const knex = require ("../models/knex");
const index = async (_req, res, _next) => {
  const posts = await knex.select ("id", "title", "content").from("posts");
  return res.send({
    message: "Success",
    data: posts,
  });
};



// const byId = (_req, res) => {
//     const ambilId = _req.params.id;
//     return res.send({
//         message: "Berhasil",
//         data: getById(+ambilId),
//     })
// }

module.exports = {
    index
}