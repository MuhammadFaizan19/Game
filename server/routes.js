const express = require('express');
const router = express.Router();
const helpers = require('./helpers');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

router.route('/')
    .get(helpers.getGames)
    .post(upload.single('cover'), helpers.createGame, (req, res) => { console.log(req.cover) })


router.route('/:gameId')
    .get(helpers.getGame)
    .put(helpers.updateGame)
    .delete(helpers.removeGame)

module.exports = router;