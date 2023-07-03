const userService = require('../services/animalService');

async function createAnimal(req, res) {
    try {
        const {id_animal, especie, sexo, porte, idade, pelagem, cor, deficiencia, vacinas, descricao, ong} = req.body
        let animal = await animalService.findUserById(id_animal);

        if (animal) {
            return res.json({
                success: false,
                data: {},
                message: "User with this email already exist",
            });
        }

        animal = await animalService.createAnimal(id_animal, especie, sexo, porte, idade, pelagem, cor, deficiencia, vacinas, descricao, ong)

        return res.json({
            success: true,
            data: user,
            message: "User created successfully",
        });

    } catch (error) {
        return res.json({error})
    }
}
async function findAllAnimais(req, res) {
    try {
        const animais = await animalService.findAllAnimais();
        return res.json({
            success: true,
            data: animais,
            message: "animais found successfully",
        });
    } catch (error) {
        return res.json({error})

    }
}

async function findAnimal(req, res){
    try {
        const {id} = req.params;
        const animal = await animalService.findAnimalById(id);

        if (!animal){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this user",
            });
        }

        return res.json({
            success: true,
            data: animal,
            message: "animal found successfully",
        });
    }catch (error) {
        return res.json({error})

    }
}

async function updateAnimal(req, res){
    try {
        const {id} = req.params;
        const {id_animal, especie, sexo, porte, idade, pelagem, cor, deficiencia, vacinas, descricao, ong} = req.body;

        let animal = await animalService.updateAnimal(id);

        if (!animal){
            return res.json({
                success: false,
                data: {},
                message: "Could not update this user",
            });
        }
        animal = await animalService.updateAnimal(id_animal, especie, sexo, porte, idade, pelagem, cor, deficiencia, vacinas, descricao, ong);

        return res.json({
            success: true,
            data: animal,
            message: "User updated successfully",
        });

    }catch (error) {
        return res.json({error})

    }
}
async function deleteAnimal(req, res) {
    try {
        const { id } = req.params;

        const animal = await animalService.findAnimalById(id);
        if (!animal){
            return res.json({
                success: false,
                data: {},
                message: "Could not find this animal",
            });
        }

        await animalService.deleteAnimalById(id);
        return res.json({
            success: true,
            data: animal,
            message: "User deleted successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    createAnimal,
    findAllAnimais,
    findAnimal,
    updateAnimal,
    deleteAnimal,
};