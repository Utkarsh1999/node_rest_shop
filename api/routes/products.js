const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'handling a get request to /products'
    });
});

router.post('/',(req,res,next) => {
    const product = {
        name : req.body.name,
        price : req.body.price
    };
    res.status(200).json({
        message: 'handling a post request to /products',
        createdProduct : product
    });
});

router.get('/:productId',(req,res,next) => {
    const id = req.params.productId;
    if(id === 'special')
    {
        res.status(200).json({
            message : 'you discovered a special id',
            id : id
        });
    } else {
        res.status(200).json({
            message : 'you discovered a normal id',
            id : id
        });
    }
});

router.patch('/:productId',(req,res,next) => {
    const id = req.params.productId;
   res.status(200).json({
       message: 'updated product'
   });
});


router.delete('/:productId',(req,res,next) => {
    const id = req.params.productId;
   res.status(200).json({
       message: 'deleted product'
   });
});

module.exports = router;