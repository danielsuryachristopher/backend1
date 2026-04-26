const express = require ("express");

const router = express.Router(); // buat endpoint

const { index, getById, deleteIndex, deleteGetById, updateIndex, updateGetById, putIndex, putGetById} = require ("../controllers/post.controller");
// const { index } = require ("../controllers/post.controller");

router.get ("/all", index);
router.get ("/:id", getById);


router.delete ("/all", deleteIndex);
router.delete ("/:id", deleteGetById);



router.patch ("/all", updateIndex);
router.patch ("/:id", updateGetById);


router.put ("/all", putIndex);
router.put ("/:id", putGetById);


// router.delete ("/all", deleteIndex);
//router.delete ("/:id", deletebyId);



// router.put ("/", index);
// router.put ("/:id", byId);


// router.delete ("/", index);
// router.delete ("/:id", byId);

module.exports = router;