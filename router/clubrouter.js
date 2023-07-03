const express = require( 'express' );
const router = express.Router();
const {createclub, allclubs, getoneclub, updateclub, deleteclub}= require('../controller/clubcontroller');
const upload = require('../utils/utils');

router.post('/createclub',upload.single("logo"), createclub)
router.get('/allclubs', allclubs)
router.get('/getoneclub/:id', getoneclub)
router.put('/updateclub/:id',  upload.single("logo"),  updateclub)
router.delete('/deleteclub/:id', deleteclub)


module.exports= router