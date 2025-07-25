const jobModel = require("../models/job.model");

// Create a new job
const createJob = async (req, res) => {
  try {
    const jobData = req.body;
    const newJob = await jobModel.create(jobData);
    res.status(201).json({ job: newJob });
  } catch (error) {
    res.status(500).json({ error: "Failed to create job" });
  }
};

// Get all jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await jobModel.find();
    res.status(200).json({ jobs });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

module.exports = {
  createJob,
  getAllJobs,
};
