const express = require('express');
const upload = require('../middleware/upload');
const { applyJob } = require('../controllers/applyController');
const router = express.Router();

router.post('/:jobId', upload.single('resume'), applyJob);

module.exports = router;
