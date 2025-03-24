import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const defaultJobs = [
  {
    id: 1,
    company: "Marquis Technologies",
    salary: "8.8 LPA",
    jobTitle: "Test Engineer",
    location: "Navi Mumbai, Maharashtra",
    skills: ["Java", "Manual Testing", "Good Communication"],
    postedOn: "2 days ago",
    expiresOn: "Expired 19 hours ago",
  },
  {
    id: 2,
    company: "Onefin",
    salary: "16 LPA",
    jobTitle: "DevOps Engineer",
    location: "Bangalore",
    skills: ["Python", "AWS and provisioning"],
    postedOn: "2 days ago",
    expiresOn: "Expired 2 days ago",
  },
  {
    id: 3,
    company: "Onefin",
    salary: "14.5 LPA",
    jobTitle: "Integration Engineer",
    location: "Bangalore",
    skills: ["Python", "APIs"],
    postedOn: "2 days ago",
    expiresOn: "Expired 2 days ago",
  },
  {
    id: 4,
    company: "Onefin",
    salary: "16 LPA",
    jobTitle: "SDE-1",
    location: "Bangalore",
    skills: ["Python", "Django", "API"],
    postedOn: "2 days ago",
    expiresOn: "Expired 2 days ago",
  },
  {
    id: 5,
    company: "Kanini Software Solutions",
    salary: "12.5 LPA",
    jobTitle: "Trainee Associate Software Developer",
    location: "Bangalore, Chennai",
    skills: ["HTML", "CSS", "JS", "React", "SQL", "DotNet"],
    postedOn: "3 days ago",
    expiresOn: "Expired 2 days ago",
  },
  {
    id: 6,
    company: "Aroha Technologies",
    salary: "11.2 LPA",
    jobTitle: "Java Developer",
    location: "Bangalore",
    skills: ["Core Java", "Java Frameworks"],
    postedOn: "3 days ago",
    expiresOn: "Expired 2 days ago",
  },
  {
    id: 7,
    company: "Infosys",
    salary: "17.5 LPA",
    jobTitle: "Software Engineer",
    location: "Pune, Maharashtra",
    skills: ["Java", "Spring Boot", "Microservices"],
    postedOn: "1 day ago",
    expiresOn: "Expires in 5 days",
  },
  {
    id: 8,
    company: "TCS",
    salary: "15 LPA",
    jobTitle: "Frontend Developer",
    location: "Hyderabad",
    skills: ["React", "CSS", "JavaScript"],
    postedOn: "1 day ago",
    expiresOn: "Expires in 5 days",
  }
];

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    try {
      let storedJobs = JSON.parse(localStorage.getItem("jobs"));
      if (!storedJobs || storedJobs.length < 8) {
        storedJobs = defaultJobs;
        localStorage.setItem("jobs", JSON.stringify(defaultJobs)); // Save defaults
      }
      setJobs(storedJobs);
    } catch (error) {
      console.error("Error loading jobs:", error);
      setJobs(defaultJobs); // Use default jobs as fallback
    }
  }, []);

  return (
    <div className="dashboard">
      <h1>Job Listings</h1>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <h3>{job.company}</h3>
              <span className="salary">{job.salary}</span>
            </div>
            <p className="job-title">{job.jobTitle}</p>
            <p className="job-location">📍 {job.location}</p>
            <div className="skills">
              {job.skills.map((skill, index) => (
                <span key={index} className="skill">{skill}</span>
              ))}
            </div>
            <p className="job-info">🕒 {job.postedOn} | ⏳ {job.expiresOn}</p>
            <div className="job-footer">
              <span className="not-applied">⚠️ Not Applied</span>
              <button className="details-button">→ Check Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
