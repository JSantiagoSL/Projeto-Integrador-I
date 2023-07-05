async function createOng(cnpj, email, senha, facebook, whatsaap, descricao_ong, conta_banco_ong, endereco_ong,  ) {
    const animal = await prisma.animal.create({
        data: {
            cnpj, 
            email, 
            senha, 
            facebook, 
            whatsaap, 
            descricao_ong, 
            conta_banco_ong, 
            endereco_ong,

            
        },
    });

    return ong;
}

async function findOngByCnpj(cnpj) {
    return prisma.ong.findUnique({
        where: {id: Number(cnpj)}
    });
}


async function findAllOngs() {

    const ongs = await prisma.ong.findMany();
    return ongs;
}

async function updateOng(cnpj, email, senha, facebook, whatsaap, descricao_ong, conta_banco_ong, endereco_ong,) {

    const ong = await prisma.ong.update({
        where: { id: Number(cnpj) },
        data: {cnpj, email, senha, facebook, whatsaap, descricao_ong, conta_banco_ong, endereco_ong,}
    });

    return ong;
}

async function deleteOngByCnpj(cnpj) {

    return prisma.ong.delete({where: {id: Number(cnpj)}});
}
module.exports = {
    createOng,
    findAllOngs,
    deleteOngByCnpj,
    updateOng,
    findOngByCnpj,
};