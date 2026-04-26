

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




// const knex = require("../models/knex");
// const index = async (_req, res, _next) => {
//   const posts = await knex.select("id", "title", "content").from("posts");
//   return res.send({
//     message: "Success",
//     data: posts,
//   });
// }
// const byId = (_req, res, _next) => {
//   //const posts = knex.select("id", "title", "content").from("posts");
//   const ambilId = _req.params.id;
//   return res.send({
//     message: "Berhasil",
//     data: posts(+ambilId),
//   })
// }
// module.exports = {
//     index, byId
// }









const knex = require("../models/knex");

// 1. Fungsi untuk mengambil semua post
const index = async (_req, res) => {
  try {
    const posts = await knex.select("id", "title", "content").from("posts");
    return res.status(200).send({
      message: "Success",
      data: posts,
    });
  } catch (error) {
    return res.status(500).send({ message: "Error", error: error.message });
  }
};

// 2. Fungsi untuk mengambil post berdasarkan ID
const byId = async (req, res) => {
  try {
    // Mengambil id dari parameter URL (contoh: /posts/:id)
    const { id } = req.params;

    const post = await knex
      .select("id", "title", "content")
      .from("posts")
      .where("id", id) // Memfilter langsung di database
      .first(); // Mengambil satu objek saja, bukan array

    if (!post) {
      return res.status(404).send({ message: "Post tidak ditemukan" });
    }

    return res.send({
      message: "Berhasil",
      data: post,
    });
  } catch (error) {
    return res.status(500).send({ message: "Error", error: error.message });
  }
};

module.exports = { index, byId };