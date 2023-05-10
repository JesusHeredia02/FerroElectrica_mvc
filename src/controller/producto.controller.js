const productosController={};
const producto=require('../models/producto.models')

productosController.obtenerProductos=async(req,res)=>{
    const Productos= await producto.find();
    res.json(Productos)
};

module.exports=productosController;