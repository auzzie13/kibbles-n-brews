const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({ storage: storage, limits: {
  fileSize: 1024 * 1024 * 10
} })

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, "./uploads")
  },
  filename: function(req, file, cb) {
    cb(null, file.filename)
  }
})

router.post("/members", upload.single("userImage"), (req, res, next) => {
  const image = new Image({
    _id: new mongoose.Types.ObjectId()
  });
  image 
    .save()
    .then(res => {
      console.log(res)
    })
  console.log(req.file)
})