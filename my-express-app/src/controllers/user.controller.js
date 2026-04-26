// const { all: getAllUsers, byId: getbyId } = require("../models/user");

// /**
//  * @param {import("express").Request} _req
//  * @param {import("express").Response} res
//  * @param {import("express").NextFunction} _next
//  */
// const index = (_req, res, _next) => {
//   return res.send({
//     message: "Success",
//     data: getAllUsers(),
//   });
// };


// const byId = (_req, res) => {
//     const ambilId = _req.params.id;
//     return res.send({
//         message: "Berhasil",
//         data: getById(+ambilId),
//     })
// }


// //module.exports = { index, byId };
// module.exports = { index};