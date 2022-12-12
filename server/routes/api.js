const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const neighborControllers = require('../controllers/neighborControllers');

router.get('/:email', neighborControllers.getConsumers, (req, res) => {
  res.status(200).json(res.locals.consumers);
});

router.post(
  '/',
  neighborControllers.createConsumers,
  (req, res) => {
    res.status(200);
  }
);

router.delete('/:_email', neighborControllers.deleteConsumers, (req, res) => {
  console.log('hit delete router', req.params)
  res.status(200).json({});
});

router.patch('/:_email', neighborControllers.updateConsumer, (req, res) => {
  res.status(200).json({});
});

module.exports = router;
