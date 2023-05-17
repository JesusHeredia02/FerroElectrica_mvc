const {Router}=require('express');
const router=Router();

const productosController=require('../controller/producto.controller');
router.get('/',productosController.obtenerProductos);
router.get('/:cb',productosController.obtener);
router.post('/:cb',productosController.insertarproductos);
router.get('/:cb:',productosController.eliminarproductos);
router.post('/:cb',productosController.actualizarproducto);


module.exports=router;