const database = require("../db/models");

//  Listando usuário 
const listUser = async (req,res) => {
    const { id } = req.params;
    const consultId = await database.Users.findOne({
        where: {
            id: Number(id),
        },
    });
    if(consultId){
        return res.send(consultId);
    }
    return res.send("Usuário não existe")
}
// Listando todos usuarios
const listerUsers = async (req,res) => {
    const allUsers = await database.Users.findAll();
    if(allUsers){
        return res.send(allUsers)
    };
    return res.send("Usuário não existe")
}
// Adicionando novo usuário
const createUser = async (req, res) => {
  await database.Users.create(req.body);
  return res.send("Usuário criado com sucesso!");
};
// Deletar usuário
const deleteUser = async (req, res) => {
    const { id } = req.params;

    const consultId = await database.Users.findOne({
        where: {
            id: Number(id),
        },
    });
    if (consultId) {
        await database.User.destroy({
            where: {
                id: Number(id),
            },
        });
        return res.send("Usuário deletado com sucesso");
    }
    return res.send("Não existe esse usuário")
}
//  editar um usuário
const editUser = async (req, res) =>{
    const { id } = req.params;
    const consultId = await database.Users.findOne({
        where:{
            id: Number(id),
        },
    });
    if(consultId) {
        await database.Users.update(req.body,{
            where: {
                id: Number(id),
            },
        });
        return res.send("Usuário editado com sucesso");
    }
    return res.send("Usuário não editado")
}
module.exports = {
  listerUsers,
  listUser,
  createUser,
  deleteUser,
  editUser
};
