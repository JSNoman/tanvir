let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
// let db = require('../config/mysql');
// let util = require('util');
// let dbQuery = util.promisify(db.query).bind(db);
let Price = require('../model/price');


router.get('/', async (req, res) => {
    return res.render('index');
});

// router.get('/price', async (req, res) => {
//     let sql = 'SELECT * FROM price'; 
//     let results = await dbQuery(sql);
//     return res.render('price', {data: results});
// });

// router.post('/price', async (req, res) => {
//     let { text, number } = req.body;
//     let sql = 'INSERT INTO price (text, number) VALUES (?, ?)';
//     let results = await dbQuery(sql, [text, number]);
//     return res.redirect('/price');
// });

router.get('/price', async (req, res) => {
    const results = await Price.find({});
    return res.render('price', {data: results});
});

router.post('/price', async (req, res) => {
    let newData = new Price({
        text: req.body.text,
        number: req.body.number
    })
    let result = await newData.save();
    console.log(result);
    return res.redirect('/price');
});






module.exports = router;















































