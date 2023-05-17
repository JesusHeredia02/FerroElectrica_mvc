const productosController={};
const producto=require('../models/producto.models')

productosController.obtenerProductos=async(req,res)=>{
    const Productos= await producto.find();
    res.json(Productos)
};

productosController.obtener=async(req,res)=>{
    const producto1= await producto.findOne({codigobbarras:req.params.id})
    if(producto!=null)
    res.json(
        producto1
    )
    else
    res.send('{"status":"no existe"}');
};

productosController.insertarproductos= async(req,res)=>{
    const productoinsertado=new producto(req.body)
    await productoinsertado.save();
}

productosController.eliminarproductos= async(req,res)=>{
    const productoeliminado=new producto.findOneAndDelete({codigobbarras:req.params.cb})
    res.json('{"status":"eliminado"}');
}

productosController.actualizarproducto= async(req,res)=>{
    const actualizarproducto= new producto(req.body)
    await producto.findOneAndUpdate({codigobbarras:req.params.cb},req.body)
    res.json('{"status":"actualizado"}');
}




module.exports=productosController;