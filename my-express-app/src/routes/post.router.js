const express = require ("express");

const router = express.Router();

const { index, byId } = require ("../controllers/post.controller");

router.get ("/", index);
router.get ("/:id", byId);



router.put ("/", index);
router.put ("/:id", byId);


router.delete ("/", index);
router.delete ("/:id", byId);

module.exports = router;