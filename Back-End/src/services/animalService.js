import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();



async function createAnimal(id_animal, especie, sexo, porte, idade, pelagem, cor, deficiencia, vacinas, descricao, ong, ) {
    const animal = await prisma.animal.create({
        data: {
            id_animal, 
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

    return animal;
}

async function findAnimalById(id_animal) {
    return prisma.animal.findUnique({
        where: {id: Number(id_animal)}
    });
}


async function findAllAnimais() {

    const animais = await prisma.animal.findMany();
    return animais;
}

async function updateAnimal(id_animal, especie, sexo, porte, idade, pelagem, cor, deficiencia, vacinas, descricao, ong) {

    const animal = await prisma.animal.update({
        where: { id: Number(id_animal) },
        data: {id_animal, especie, sexo, porte, idade, pelagem, cor, deficiencia, vacinas, descricao, ong}
    });

    return animal;
}

async function deleteAnimalById(id_animal) {

    return prisma.animal.delete({where: {id: Number(id_animal)}});
}
module.exports = {
    createAnimal,
    findAllAnimais,
    deleteAnimalById,
    updateAnimal,
    findAnimalById,
};