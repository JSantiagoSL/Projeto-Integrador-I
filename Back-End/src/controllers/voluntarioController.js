const { voluntarios_funcao } = require('@prisma/client');
const voluntarioService = require('../services/voluntarioService');

async function createVoluntario(req, res) {
    try {
        const {name, email, } = req.body
        let voluntario = await voluntarioService.findVoluntarioById(Id);

        if (voluntario) {
            return res.json({
                success: false,
                data: {},
                message: "",
            });
        }

        voluntario = await voluntarioService.createVoluntario(funcao, transporte)

        return res.json({
            success: true,
            data: voluntario,
            message: "",
        });

    } catch (error) {
        return res.json({error})
    }
}
// encontrar voluntario
async function findVoluntario(req, res){
    try {
        const {cpf_vol} = req.params;
        const voluntario = await voluntarioService.findVoluntarioById(cpf_vol); // lembrar qual a chave de voluntario

        if (!voluntario){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this user",
            });
        }

        return res.json({
            success: true,
            data: voluntario,
            message: "voluntario encontrado com sucesso",
        });
    }catch (error) {
        return res.json({error})

    }
}

async function deleteVoluntario(req, res) {
    try {
        const { cpf_vol } = req.params;

        const voluntario = await voluntarioService.findVoluntarioById(cpf_vol);
        if (!voluntario){
            return res.json({
                success: false,
                data: {},
                message: "",
            });
        }

        await voluntarioService.deleteVoluntarioById(cpf_vol);
        return res.json({
            success: true,
            data: voluntario,
            message: "",
        });
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    createVoluntario,
    findVoluntario,
    deleteVoluntario,
};