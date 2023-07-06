const userService = require('../services/ongService');

async function createOng(req, res) {
    try {
        const {cnpj, email, senha, facebook, whatsaap, descricao_ong, conta_banco_ong, endereco_ong,} = req.body
        let ong = await ongService.findOngByCnpj(cnpj);

        if (ong) {
            return res.json({
                success: false,
                data: {},
                message: "User with this email already exist",
            });
        }

        ong = await ongService.createOng(cnpj, email, senha, facebook, whatsaap, descricao_ong, conta_banco_ong, endereco_ong,  )

        return res.json({
            success: true,
            data: ong,
            message: "Ong created successfully",
        });

    } catch (error) {
        return res.json({error})
    }
}
async function findAllOngs(req, res) {
    try {
        const ongs = await ongService.findAllOngs();
        return res.json({
            success: true,
            data: ongs,
            message: "ongs found successfully",
        });
    } catch (error) {
        return res.json({error})

    }
}

async function findOng(req, res){
    try {
        const {cnpj} = req.params;
        const ong = await ongService.findOngByCnpj(cnpj);

        if (!ong){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this ong",
            });
        }

        return res.json({
            success: true,
            data: ong,
            message: "ong found successfully",
        });
    }catch (error) {
        return res.json({error})

    }
}

async function updateOng(req, res){
    try {
        const {Cnpj} = req.params;
        const {cnpj, email, senha, facebook, whatsaap, descricao_ong, conta_banco_ong, endereco_ong,} = req.body;

        let ong = await ongService.updateOng(cnpj);

        if (!cnpj){
            return res.json({
                success: false,
                data: {},
                message: "Could not update this user",
            });
        }
        ong = await ongService.updateOng(id_animal, especie, sexo, porte, idade, pelagem, cor, deficiencia, vacinas, descricao, ong);

        return res.json({
            success: true,
            data: ong,
            message: "ong updated successfully",
        });

    }catch (error) {
        return res.json({error})

    }
}
async function deleteOng(req, res) {
    try {
        const { cnpj } = req.params;

        const ong = await ongService.findOngByCnpj(cnpj);
        if (!ong){
            return res.json({
                success: false,
                data: {},
                message: "Could not find this ong",
            });
        }

        await ongService.deleteOngByCnpj(cnpj);
        return res.json({
            success: true,
            data: cnpj,
            message: "ong deleted successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    createOng,
    findAllOngs,
    findOng,
    updateOng,
    deleteOng,
};