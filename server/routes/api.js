const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const neighborControllers = require('../controllers/neighborControllers'); 


router.get('/', neighborControllers.getConsumers, (req, res) => {
    return res.status(200)
    // what are we sending in res locals - will be determined in the controller 
});

router.post('/', neighborControllers.createConsumers, (req, res) => {
    return res.status(200)
})


module.exports = router