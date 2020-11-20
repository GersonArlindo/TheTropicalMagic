const { Router } = require('express');
const router = Router();

const Article = require('../models/Article');

router.get('/articles', async (req, res) => {
    const articles = await Article.find();
    res.json({articles});
});

router.post('/add', async (req, res) => {
    const articles = new Article(req.body);
    await articles.save();
    res.json({
        status:'TareaGuardada'
    });
});

router.put('/edit/:id', async (req, res) => {
    await Article.findByIdAndUpdate(req.params.id, req.body);
    res.json('update');
});

router.delete('/delete/:id', async (req, res) => {
    await Article.findByIdAndRemove(req.params.id, req.body);
    res.json('delete');
});



module.exports = router;