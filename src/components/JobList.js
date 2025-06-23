import React, { useState } from 'react';
import './JobList.css';

const jobs = [
  { id: 1, title: 'Inbound Sales Representative Associate', location: 'Mumbai', type: 'Full time', experience: '0-2 years', image: '/assets/img/job-inbound-sales.jpg' },
  { id: 2, title: 'Procure to Pay Operations New Associate', location: 'Chennai', type: 'Full time', experience: '0-2 years', image: '/assets/img/job-procure-pay.jpg' },
  { id: 3, title: 'Record to Report Ops Associate', location: 'Noida', type: 'Full time', experience: '0-2 years', image: '/assets/img/job-record-report.jpg' },
  { id: 4, title: 'Software Engineer', location: 'Bangalore', type: 'Full time', experience: '2-5 years', image: '/assets/img/job-software-engineer.jpg' },
  { id: 5, title: 'Data Analyst', location: 'Hyderabad', type: 'Full time', experience: '1-3 years', image: '/assets/img/job-data-analyst.jpg' },
  { id: 6, title: 'Project Manager', location: 'Pune', type: 'Full time', experience: '5-7 years', image: '/assets/img/job-project-manager.jpg' },
  { id: 7, title: 'UX Designer', location: 'Mumbai', type: 'Full time', experience: '3-5 years', image: '/assets/img/job-ux-designer.jpg' },
  { id: 8, title: 'Quality Assurance Engineer', location: 'Chennai', type: 'Full time', experience: '2-4 years', image: '/assets/img/job-qa-engineer.jpg' },
  { id: 9, title: 'Business Analyst', location: 'Noida', type: 'Full time', experience: '3-6 years', image: '/assets/img/job-business-analyst.jpg' },
  { id: 10, title: 'DevOps Engineer', location: 'Bangalore', type: 'Full time', experience: '4-7 years', image: '/assets/img/job-devops-engineer.jpg' },
  { id: 11, title: 'Technical Support Specialist', location: 'Hyderabad', type: 'Full time', experience: '1-3 years', image: '/assets/img/job-tech-support.jpg' },
  { id: 12, title: 'Network Engineer', location: 'Pune', type: 'Full time', experience: '3-5 years', image: '/assets/img/job-network-engineer.jpg' },
  { id: 13, title: 'Content Writer', location: 'Mumbai', type: 'Full time', experience: '2-4 years', image: '/assets/img/job-content-writer.jpg' },
  { id: 14, title: 'HR Manager', location: 'Chennai', type: 'Full time', experience: '5-8 years', image: '/assets/img/job-hr-manager.jpg' },
  { id: 15, title: 'Marketing Specialist', location: 'Noida', type: 'Full time', experience: '3-5 years', image: '/assets/img/job-marketing-specialist.jpg' },
  { id: 16, title: 'Sales Executive', location: 'Bangalore', type: 'Full time', experience: '1-3 years', image: '/assets/img/job-sales-executive.jpg' },
  { id: 17, title: 'Graphic Designer', location: 'Hyderabad', type: 'Full time', experience: '2-4 years', image: '/assets/img/job-graphic-designer.jpg' },
  { id: 18, title: 'Product Manager', location: 'Pune', type: 'Full time', experience: '5-7 years', image: '/assets/img/job-product-manager.jpg' },
  { id: 19, title: 'Customer Service Representative', location: 'Mumbai', type: 'Full time', experience: '1-3 years', image: '/assets/img/job-customer-service.jpg' },
  { id: 20, title: 'Financial Analyst', location: 'Chennai', type: 'Full time', experience: '3-6 years', image: '/assets/img/job-financial-analyst.jpg' },
  { id: 21, title: 'Operations Manager', location: 'Noida', type: 'Full time', experience: '5-8 years', image: '/assets/img/job-operations-manager.jpg' },
  { id: 22, title: 'Legal Advisor', location: 'Bangalore', type: 'Full time', experience: '7-10 years', image: '/assets/img/job-legal-advisor.jpg' },
  { id: 23, title: 'Research Scientist', location: 'Hyderabad', type: 'Full time', experience: '4-7 years', image: '/assets/img/job-research-scientist.jpg' },
  { id: 24, title: 'IT Consultant', location: 'Pune', type: 'Full time', experience: '3-5 years', image: '/assets/img/job-it-consultant.jpg' },
  { id: 25, title: 'Social Media Manager', location: 'Mumbai', type: 'Full time', experience: '2-4 years', image: '/assets/img/job-social-media.jpg' },
  { id: 26, title: 'Database Administrator', location: 'Chennai', type: 'Full time', experience: '4-6 years', image: '/assets/img/job-database-admin.jpg' },
  { id: 27, title: 'Cloud Architect', location: 'Noida', type: 'Full time', experience: '5-8 years', image: '/assets/img/job-cloud-architect.jpg' },
  { id: 28, title: 'Mobile App Developer', location: 'Bangalore', type: 'Full time', experience: '3-5 years', image: '/assets/img/job-mobile-app.jpg' },
  { id: 29, title: 'Cybersecurity Analyst', location: 'Hyderabad', type: 'Full time', experience: '4-7 years', image: '/assets/img/job-cybersecurity.jpg' },
  { id: 30, title: 'Technical Writer', location: 'Pune', type: 'Full time', experience: '2-4 years', image: '/assets/img/job-technical-writer.jpg' },
];

const JOBS_PER_PAGE = 10;

const JobList = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Filter jobs based on search query (case-insensitive)
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  );

  return (
    <section className="job-list">
      {currentJobs.map((job) => (
        <div key={job.id} className="job-card">
          <img src={job.image} alt={job.title} className="job-image" />
          <div className="job-info">
            <h3>{job.title}</h3>
            <p>{job.location} | {job.type} | Experience: {job.experience}</p>
          </div>
          <button className="job-expand-btn" aria-label={`Expand details for ${job.title}`}>+</button>
        </div>
      ))}

      {/* Pagination controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={pageNum === currentPage ? 'active' : ''}
              aria-label={`Page ${pageNum}`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          
        </button>
      </div>
    </section>
  );
};

export default JobList;
