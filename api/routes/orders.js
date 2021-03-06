const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'orders was fetched'
    });
});


router.post('/',(req,res,next) => {
    const order = {
        productId : req.body.productId,
        quantity : req.body.quantity
    };
    res.status(201).json({
        message: 'orders was created',
        order : order
    });
});


router.get('/:orderId',(req,res,next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'orders details',
        id: id
    });
});


router.delete('/:orderId',(req,res,next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message: 'orders deleted',
        id: id
    });
});

module.exports = router;