const adotanteService = require('../services/adotanteService');

async function createAdotante(req, res) {
    try {
        const {nome, cpf, email, telefone, endereco_pessoas, rendafixa, aceitacaoAnimal, animaisAtuais, animaisAntigos, descMoradores, motivacao  } = req.body
        let adotante = await adotanteService.findAdotanteById(cpf_adot);

        if (adotante) {
            return res.json({
                success: false,
                data: {},
                message: "",
            });
        }

        adotante = await adotanteService.createAdotante(nome, cpf, email, telefone, endereco_pessoas, rendafixa, aceitacaoAnimal, animaisAtuais, animaisAntigos, descMoradores, motivacao  )

        return res.json({
            success: true,
            data: adotante,
            message: "",
        });

    } catch (error) {
        return res.json({error})
    }
}
// encontrar um adotante
async function findAdotante(req, res){
    try {
        const {cpf_adot} = req.params;
        const adotante = await adotanteService.findAdotanteById(cpf_adot); // lembrar qual a chave de adotante

        if (!adotante){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this user",
            });
        }

        return res.json({
            success: true,
            data: adotante,
            message: "adotante encontrado com sucesso",
        });
    }catch (error) {
        return res.json({error})

    }
}

async function deleteAdotante(req, res) {
    try {
        const { cpf_adot } = req.params;

        const adotante = await adotanteService.findAdotanteById(cpf_adot);
        if (!adotante){
            return res.json({
                success: false,
                data: {},
                message: "",
            });
        }

        await adotanteService.deleteAdotanteById(cpf_adot);
        return res.json({
            success: true,
            data: adotante,
            message: "",
        });
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    createAdotante,
    findAdotante,
    deleteAdotante,
};