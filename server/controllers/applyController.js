exports.applyJob = async (req, res) => {
  const { jobId } = req.params;
  const resumeFile = req.file;

  if (!resumeFile) return res.status(400).json({ message: "No file uploaded" });


  res.status(200).json({
    message: "Application submitted",
    jobId,
    resume: resumeFile.filename
  });
};
