var express = require('express');
const UploadController = require('../../controllers/admin/UploadController');
var UploadRouter = express.Router();

//图片上传
const multer  = require('multer')
const upload = multer({ dest: 'public/newsuploads/' })

UploadRouter.post("/adminapi/editor/upload",upload.single("file"),UploadController.upload)
module.exports = UploadRouter