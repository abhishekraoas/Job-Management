const express = require('express');
const router = express.Router();
const { createJob, getAllJobs } = require('../controllers/job.controller');


router.get('/', (req, res) => {
  res.send('Job route is working');
});

//create job route
router.post('/create-job', createJob);

// getting all jobs
router.get('/all-jobs', getAllJobs);


// Export the router
module.exports = router;