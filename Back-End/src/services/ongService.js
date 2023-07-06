async function createOng(cnpj, nome, email, senha, facebook, whatsaap, descricao_ong, conta_banco_ong, endereco_ong, ) {
    const ong = await prisma.ong.create({
        data: {
            cnpj,
            nome,
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

async function findOngById(id) {
    return prisma.ong.findUnique({
        where: {id: Number(id)}
    });
}


async function findAllOngs() {

    const ongs = await prisma.ong.findMany();
    return ongs;
}

async function updateOng(cnpj, nome, email, senha, facebook, whatsaap, descricao_ong, conta_banco_ong, endereco_ong,) {

    const ong = await prisma.ong.update({
        where: { id: Number(id) },
        data: {cnpj, nome, email, senha, facebook, whatsaap, descricao_ong, conta_banco_ong, endereco_ong,}
    });

    return ong;
}

async function deleteOngById(id) {

    return prisma.ong.delete({where: {id: Number(id)}});
}
module.exports = {
    createOng,
    findAllOngs,
    deleteOngById,
    updateOng,
    findOngById,
};