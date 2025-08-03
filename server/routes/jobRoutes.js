const express = require('express');
const { getAllJobs, postJob } = require('../controllers/jobController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getAllJobs);
router.post('/', auth, postJob);

module.exports = router;
