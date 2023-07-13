import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();



async function createAnimal(especie, sexo, porte, idade, pelagem, cor, deficiencia, vacinas, descricao, ong) {
    const animais = await prisma.animais.create({
        data: {
            especie, 
            sexo,
            porte, 
            idade, 
            pelagem,
            cor, 
            deficiencia, 
            vacinas, 
            descricao, 
            ong,
            
        },
    });

    return animais;
}

async function findAnimalById(id_animal) {
    return prisma.animais.findUnique({
        where: {id: Number(id_animal)}
    });
}


async function findAllAnimal() {

    const animais = await prisma.animais.findMany();
    return animais;
}

async function updateAnimal(id_animal, especie, sexo, porte, idade, pelagem, cor, deficiencia, vacinas, descricao, ong) {

    const animais = await prisma.animais.update({
        where: { id: Number(id_animal) },
        data: {id_animal, especie, sexo, porte, idade, pelagem, cor, deficiencia, vacinas, descricao, ong}
    });

    return animais;
}

async function deleteAnimalById(id_animal) {

    return prisma.animais.delete({where: {id: Number(id_animal)}});
}
module.exports = {
    createAnimal,
    findAllAnimal,
    deleteAnimalById,
    updateAnimal,
    findAnimalById,
};