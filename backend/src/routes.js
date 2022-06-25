const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require('./config/multer');

const Post = require('./models/Post');

routes.get('/posts', async(req, res) => {
    console.log("entrei")
    const posts = await Post.find();

    return res.json(posts)
})

routes.post('/posts', multer(multerConfig).single('file'), async(req, res) => {

    console.log(req.file)
    const { originalname: name, size, filename: key, location: url = "" } = req.file;

    const post = await Post.create({
        name,
        size,
        key,
        url,
    })
    console.log(req.file);


    return res.json(post)
})

module.exports = routes;