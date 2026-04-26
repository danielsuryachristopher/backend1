const express = require ("express");

const router = express.Router(); // buat endpoint

const { index, byId} = require ("../controllers/post.controller");
// const { index } = require ("../controllers/post.controller");

router.get ("/all", index);
router.get ("/:id", byId);






// router.put ("/", index);
// router.put ("/:id", byId);


// router.delete ("/", index);
// router.delete ("/:id", byId);

module.exports = router;