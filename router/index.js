const express = require("express");
const router = express.Router();
const db = require("../data/db");


router.use('/product-detail/:id', async (req, res) => {
    try {
        const [product,] = await db.execute("Select * from product where id", [req.params.id])
        res.render('ProductDetail', { list: product[0] });
    } catch (error) {
        console.log(error);
    }
});

router.use('/products', async (req, res) => {
    try {
        const [product,] = await db.execute("select * from product")
        res.render('Product', { list: product });
    } catch (error) {
        console.log(error);
    }
});

router.use('/', async (req, res) => {
    try {
        const [product,] = await db.execute("select * from product");
        res.render('index', { list: product });
    } catch (error) {
        console.log(error);
    }
});




module.exports = router