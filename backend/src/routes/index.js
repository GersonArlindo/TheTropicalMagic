const { Router } = require('express');
const router = Router();

const Order = require('../models/Order');
const Article = require('../models/Article');

//---------------------------------- CRUD PRODUCTOS-----------------------------------------------
//Obtiene productos
router.get('/articles', async (req, res) => {
    const articles = await Article.find();
    res.json({articles});
});
//Agrega Productos
router.post('/add', async (req, res) => {
    const articles = new Article(req.body);
    await articles.save();
    res.json({
        status:'ProductoGuardado'
    });
});
//Edita Productos
router.put('/edit/:id', async (req, res) => {
    await Article.findByIdAndUpdate(req.params.id, req.body);
    res.json('update');
});
//Borra Productos
router.delete('/delete/:id', async (req, res) => {
    await Article.findByIdAndRemove(req.params.id, req.body);
    res.json('delete');
});
//------------------------------------------------------------------------------------------------
//--------------------------------------CRUD ORDENES----------------------------------------------

//Obtiene ordenes
router.get('/orders', async (req, res) => {
    const orders = await Order.find();
    res.json({orders});
});

//Agrega Ordenes
router.post('/addOrder', async (req, res) => {
    const orders = new Order(req.body);
    await orders.save();
    res.json({
        status:'Ordenagregada'
    });
});
//Edita Ordenes
router.put('/editOrder/:id', async (req, res) => {
    await Order.findByIdAndUpdate(req.params.id, req.body);
    res.json('update');
});
//Borra Ordenes
router.delete('/deleteOrder/:id', async (req, res) => {
    await Order.findByIdAndRemove(req.params.id, req.body);
    res.json('delete');
});


//------------------------------------------------------------------------------------

module.exports = router;