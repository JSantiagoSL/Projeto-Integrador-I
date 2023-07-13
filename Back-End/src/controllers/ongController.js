const ongService = require ('../services/ongService');

async function createOng(req, res) {
    try {
        const {cnpj, email, nome, senha, facebook, whatsaap, descricao_ong, conta_banco_ong, endereco_ong,} = req.body
        let ong = await ongService.findOngById(id);

        if (ong) {
            return res.json({
                success: false,
                data: {},
                message: "Ong com esse CNPJ já existe",
            });
        }

        ong = await ongService.createOng(cnpj, nome, email, senha, facebook, whatsaap, descricao_ong, conta_banco_ong, endereco_ong,  )

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
        const {id} = req.params;
        const ong = await ongService.findOngById(id);

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
        const {id} = req.params;
        const {cnpj, nome, email, senha, facebook, whatsaap, descricao_ong, conta_banco_ong, endereco_ong,} = req.body;

        let ong = await ongService.updateOng(id);

        if (!id){
            return res.json({
                success: false,
                data: {},
                message: "Could not update this user",
            });
        }
        ong = await ongService.updateOng(cnpj, nome, email, senha, facebook, whatsaap, descricao_ong, conta_banco_ong, endereco_ong,);

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
        const { id } = req.params;

        const ong = await ongService.findOngById(id);
        if (!ong){
            return res.json({
                success: false,
                data: {},
                message: "Could not find this ong",
            });
        }

        await ongService.deleteOngByid(id);
        return res.json({
            success: true,
            data: id,
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