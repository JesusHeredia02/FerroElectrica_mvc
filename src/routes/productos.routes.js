const {Router}=require('express');
const router=Router();
const productosController=require('../controller/producto.controller');
router.get('/',productosController.obtenerProductos);

module.exports=router;