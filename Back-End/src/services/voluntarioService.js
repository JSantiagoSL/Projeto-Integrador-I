import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();


async function createVoluntario(funcao, transporte) {
    const voluntarios = await prisma.voluntarios.create({
        data: {
            
            funcao, 
            transporte
        },
    });

    return voluntarios;
}

async function findVoluntarioById(cpf_vol) {
    return prisma.voluntarios.findUnique({
        where: {id: Number(cpf_vol)}
    });
}


async function deleteVoluntarioById(cpf_vol) {

    return prisma.voluntario.delete({where: {id: Number(cpf_vol)}});
}
module.exports = {
    createVoluntario,
    deleteVoluntarioById,
    findVoluntarioById,
};