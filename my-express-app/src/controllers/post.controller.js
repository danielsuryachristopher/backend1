

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




const knex = require("../models/knex");
const index = async (_req, res, _next) => {
  const post = await knex.select("id", "title", "content").from("posts");
  return res.send({
    message: "Success",
    data: post,
  });
}
const getById = async (req, res, _next) => {
  const { id } = req.params;
  const post = await knex.select("id", "title", "content").from("posts").where({ id: id }).first();
  return res.send({
    message: "Berhasil",
    data: post,
  });
}

const deleteIndex = async (_req, res, _next) => {
  const post = await knex.select("id", "title", "content").from("posts").del();
  return res.send({
    message: "Success",
    data: post,
  });
}
const deleteGetById = async (req, res, _next) => {
  const { id } = req.params;
  const post = await knex.select("id", "title", "content").from("posts").where({ id: id }).first().del();
  return res.send({
    message: "Berhasil",
    data: post,
  });
}



// const updateIndex = async (_req, res, _next) => {
//   const post = await knex.select("id", "title", "content").from("posts").update();
//   return res.send({
//     message: "Success",
//     data: post,
//   });
// }
// const updateGetById = async (req, res, _next) => {
//   const { id } = req.params;
//   const post = await knex.select("id", "title", "content").from("posts").where({ id: id }).first().update();
//   return res.send({
//     message: "Berhasil",
//     data: post,
//   });
// }



//yang benar
const updateIndex = async (req, res, _next) => {
  const {title, content} = req.body;
  const post = await knex("posts").update({title,content});
  return res.send({
    message: "Success",
    data: post,
  });
}
const updateGetById = async (req, res, _next) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const post = await knex("posts").where({ id: id }).update({title, content});
  return res.send({
    message: "Berhasil",
    data: post,
  });
}



// const putIndex = async (_req, res, _next) => {
//   const post = await knex.select("id", "title", "content").from("posts").insert();
//   return res.send({
//     message: "Success",
//     data: post,
//   });
// }
// const putGetById = async (req, res, _next) => {
//   const { id } = req.params;
//   const post = await knex.select("id", "title", "content").from("posts").where({ id: id }).first().insert();
//   return res.send({
//     message: "Berhasil",
//     data: post,
//   });
// }


const putIndex = async (req, res) => {
  const { title, content } = req.body;
  
  const post = await knex("posts").update({ title, content });
  
  return res.send({
    message: "Success Update All",
    data: post,
  });
};

// Ini adalah fungsi PUT yang paling umum digunakan
const putGetById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const post = await knex("posts")
    .where({ id: id })
    .update({ title, content });

  return res.send({
    message: "Berhasil",
    data: post, // Mengembalikan angka 1 jika berhasil
  });
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

}



//const knex = require("../models/knex");
// const deleteIndex = async (_req, res, _next) => {
//   const posts = await knex.select("id", "title", "content").from("posts").del();
//   return res.send({
//     message: "Success",
//     data: posts,
//   });
// }

// module.exports = { index, byId, deleteIndex };





// const knex = require("../models/knex");

// // 1. Fungsi untuk mengambil semua post
// const index = async (_req, res) => {
//   try {
//     const posts = await knex.select("id", "title", "content").from("posts");
//     return res.status(200).send({
//       message: "Success",
//       data: posts,
//     });
//   } catch (error) {
//     return res.status(500).send({ message: "Error", error: error.message });
//   }
// };

// // 2. Fungsi untuk mengambil post berdasarkan ID
// const byId = async (req, res) => {
//   try {
//     // Mengambil id dari parameter URL (contoh: /posts/:id)
//     const { id } = req.params;

//     const post = await knex
//       .select("id", "title", "content")
//       .from("posts")
//       .where("id", id) // Memfilter langsung di database
//       .first(); // Mengambil satu objek saja, bukan array

//     if (!post) {
//       return res.status(404).send({ message: "Post tidak ditemukan" });
//     }

//     return res.send({
//       message: "Berhasil",
//       data: post,
//     });
//   } catch (error) {
//     return res.status(500).send({ message: "Error", error: error.message });
//   }
// };






