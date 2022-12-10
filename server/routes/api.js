const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const neighborControllers = require('../controllers/neighborControllers');

router.get('/', neighborControllers.getConsumers, (req, res) => {
  res.status(200).json(res.locals.consumers);
});

router.post(
  '/createAccount',
  neighborControllers.createConsumers,
  (req, res) => {
    res.status(200).json({});
  }
);

router.delete('/', neighborControllers.deleteConsumers, (req, res) => {
  res.status(200).json({});
});

router.patch('/:_id', neighborControllers.updateConsumer, (req, res) => {
  res.status(200).json({});
});

module.exports = router;
