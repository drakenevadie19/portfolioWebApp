import React from 'react';

const ResumeButton = () => {
  const openResume = () => {
    // Replace 'your-resume.pdf' with the actual file name or URL of your resume
    const resumeURL = process.env.PUBLIC_URL + '/Drake Do resume.pdf';  

    // Open a new tab with the resume
    window.open(resumeURL, '_blank');
  };

  return (
    <div>
      <button onClick={openResume} className="start-cv-btn">Review Resume</button>
    </div>
  );
};

export default ResumeButton;
