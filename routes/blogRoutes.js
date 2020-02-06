var db = require("../controllers/blogController");
var router = require('express').Router();

router.route("/blog")
    .post(function(req, res){
        db.createBlog(req,res);
    })
    .get(function(req, res){
        db.getBlog(req,res);
    })
    .delete(function(req,res){
        db.deleteBlog(req,res);
    })



module.exports = router;
