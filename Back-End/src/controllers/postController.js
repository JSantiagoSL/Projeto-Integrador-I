
const postService = require('../services/postService');
const animalService = require('../services/animalService');


async function createPost(req, res) {
    const { content } = req.body;
    const { id_animal } = req.params;

    try {
        const animal = await animalService.findAnimalById(id_animal);

        if (!animal) {
            return res.json({
                success: false,
                data: {},
                message: "Could not find this animal",
            });
        }

        const post = await postService.createPost(content, animal);

        return res.json({
            success: true,
            data: post,
            message: "Post created successfully",
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function findAllPosts(req, res) {
    try {
        const posts = await postService.findAllPosts();

        return res.json({
            success: true,
            data: posts,
            message: "Posts found successfully",
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function updatePost(req, res) {
    const { id } = req.params;
    const { content } = req.body;
    try {
        let post = await postService.findPostById(id);

        if (!post) {
            return res.json({
                success: false,
                data: {},
                message: "This post not exists",
            });
        }

        post = await postService.updatePost(id, content);

        return res.json({
            success: true,
            data: post,
            message: "Posts updated successfully",
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


async function deletePost(req, res) {
    try {
        const { id } = req.params;

        const post = await postService.findPostById(id);
        if (!post){
            return res.json({
                success: false,
                data: {},
                message: "Could not find this user",
            });
        }

        await postService.deletePostById(id);
        return res.json({
            success: true,
            data: post,
            message: "Post deleted successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    createPost,
    findAllPosts,
    updatePost,
    deletePost
};