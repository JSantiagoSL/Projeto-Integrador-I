import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();



async function createAdotante(nome, cpf, email, telefone, endereco_pessoas, rendafixa, aceitacaoAnimal, animaisAtuais, animaisAntigos, descMoradores, motivacao  ) {
    const adotante = await prisma.adotante.create({
        data: {
            nome, 
            cpf, 
            email,
            telefone, 
            endereco_pessoas, 
            rendafixa, 
            aceitacaoAnimal, 
            animaisAtuais, 
            animaisAntigos, 
            descMoradores, 
            motivacao  
            
        },
    });

    return adotante;
}

async function findAdotanteById(cpf_adot) {
    return prisma.adotante.findUnique({
        where: {id: Number(cpf_adot)}
    });
}


async function deleteAdotanteById(cpf_adot) {

    return prisma.adotante.delete({where: {id: Number(cpf_adot)}});
}
module.exports = {
    createAdotante,
    deleteAdotanteById,
    findAdotanteById,
};