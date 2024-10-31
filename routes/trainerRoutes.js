const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainerController');

router.get('/', trainerController.getAllTrainers);
router.get('/create', trainerController.showCreateForm);
router.post('/create', trainerController.createTrainer);

module.exports = router;
