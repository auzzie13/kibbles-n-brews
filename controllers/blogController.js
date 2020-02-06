var Blog = require("../models/blog");

module.exports = {
    createBlog : function (req, res) {
        Blog.create({
            title: req.body.optionsBox,
            author: req.body.nameInput,
            body: req.body.textareaInput
        },
            (doc) => {
                res.status(200).send(doc)

            });
    },
    getBlog : function (req, res) {
        Blog.find({}, (doc) => {
            res.status(200).send(doc)
        })
    },

    deleteBlog : function (req, res) {
        Blog.deleteOne({ _id: req.body.id }, (doc) => {
            res.status(200).send(doc)
        })
    }


}
