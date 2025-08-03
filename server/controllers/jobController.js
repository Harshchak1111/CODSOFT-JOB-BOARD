const Job = require('../models/Job');

exports.getAllJobs = async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json(jobs);
};

exports.postJob = async (req, res) => {
  const { title, company, location, description, salary } = req.body;
  const newJob = new Job({ title, company, location, description, salary, postedBy: req.user.id });
  await newJob.save();
  res.status(201).json(newJob);
};
