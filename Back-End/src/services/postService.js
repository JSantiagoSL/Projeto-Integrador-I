import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


async function createPost(content, animal){
    const post = await prisma.post.create({
        data: {
            content,
            animalId: animal.id_animal,
        },
        include: {
            author: true,
        },
    });
return post;
}

async function findPostById(id) {
    return prisma.post.findUnique({
        where: {id: Number(id)}
    });
}

async function findAllPosts() {

    const posts = await prisma.post.findMany();
    return posts;
}

async function updatePost(id, content) {

    const post = await prisma.post.update({
        where: { id: Number(id) },
        data: {content}
    });

    return post;
}

module.exports = {
    createPost,
    findPostById,
    findAllPosts,
    updatePost,
};
