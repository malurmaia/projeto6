const database = require("../db/models");

//  Listando produto por id
const listProduct = async (req,res) => {
    const { id } = req.params;
    const consultId = await database.Users.findOne({
        where: {
            id: Number(id),
        },
    });
    if(consultId){
        return res.send(consultId);
    }
    return res.send("Produto não existe")
}
// Listando todos produtos
const listProducts = async (req,res) => {
    const allProducts = await database.Products.findAll();
    if(allProducts){
        return res.send(allProducts)
    };
    return res.send("Produto não existe")
}
// Adicionando novo Produto
const createProduct = async (req, res) => {
  await database.Products.create(req.body);
  return res.send("Produto criado com sucesso!");
};
// Deletar Produto
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    const consultId = await database.Products.findOne({
        where: {
            id: Number(id),
        },
    });
    if (consultId) {
        await database.Products.destroy({
            where: {
                id: Number(id),
            },
        });
        return res.send("Produto deletado com sucesso");
    }
    return res.send("Não existe esse Produto")
}
//  editar um Produto
const editProduct = async (req, res) =>{
    const { id } = req.params;
    const consultId = await database.Products.findOne({
        where:{
            id: Number(id),
        },
    });
    if(consultId) {
        await database.Products.update(req.body,{
            where: {
                id: Number(id),
            },
        });
        return res.send("Produto editado com sucesso");
    }
    return res.send("Produto não editado")
}
module.exports = {
  listProducts,
  listProduct,
  createProduct,
  deleteProduct,
  editProduct
};
