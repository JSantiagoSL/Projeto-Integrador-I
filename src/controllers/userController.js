

const userService = require('../services/userService');

async function createUser(req, res) {
    try {
        const {name, email} = req.body
        let user = await userService.findUserByEmail(email);

        if (user) {
            return res.json({
                success: false,
                data: {},
                message: "Já existe usuário com este email",
            });
        }

        user = await userService.createUser(name, email)

        return res.json({
            success: true,
            data: user,
            message: "Usuario criado com sucesso",
        });

    } catch (error) {
        return res.json({error})
    }
}
async function findAllUsers(req, res) {
    try {
        const users = await userService.findAllUsers();
        return res.json({
            success: true,
            data: users,
            message: "Usuários encontrados com sucesso!",
        });
    } catch (error) {
        return res.json({error})

    }
}

async function findUser(req, res){
    try {
        const {id} = req.params;
        const user = await userService.findUserById(id);

        if (!user){
            return res.json({
                    success: false,
                    data: {},
                    message: "Não foi possível localizar este usuário",
            });
        }

        return res.json({
            success: true,
            data: user,
            message: "Usuário encontrado com sucesso!",
        });
    }catch (error) {
        return res.json({error})

    }
}

async function updateUser(req, res){
    try {
        const {id} = req.params;
        const {name, email} = req.body;

        let user = await userService.updateUser(id);

        if (!user){
            return res.json({
                success: false,
                data: {},
                message: "Não foi possível atualizar este usuário",
            });
        }
        user = await userService.updateUser(id, name, email);

        return res.json({
            success: true,
            data: user,
            message: "Usuário atualizado com sucesso!",
        });

    }catch (error) {
        return res.json({error})

    }
}
async function deleteUser(req, res) {
    try {
        const { id } = req.params;

        const user = await userService.findUserById(id);
        if (!user){
            return res.json({
                success: false,
                data: {},
                message: "Não foi possível localizar este usuário",
            });
        }

        await userService.deleteUserById(id);
        return res.json({
            success: true,
            data: user,
            message: "Usuário excluído com sucesso!",
        });
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    createUser,
    findAllUsers,
    findUser,
    updateUser,
    deleteUser,
};
