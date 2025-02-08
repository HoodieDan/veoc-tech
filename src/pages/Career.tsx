import React from 'react';
import { NavLink } from 'react-router-dom';

const Career: React.FC = () => {
    const jobs = [
        {
            department: 'Design',
            availableJobs: [
                {
                    id: 1,
                    jobTitle: 'Junior UI/UX Designer',
                    jobDescription: 'We are hiring for the position of a junior UI/UX designer at Veoc tech. The ideal candidate is expected to...',
                    location: 'Remote',
                    salary: '$60k - $80k per year',
                    jobType: 'Full-time',
                },
                {
                    id: 2,
                    jobTitle: 'Junior UI/UX Designer',
                    jobDescription: 'We are hiring for the position of a junior UI/UX designer at Veoc tech. The ideal candidate is expected to...',
                    location: 'Remote',
                    salary: '$60k - $80k per year',
                    jobType: 'Full-time',
                },
            ]
        },
        {
            department: 'Sales and Marketing',
            availableJobs: [
                {
                    id: 1,
                    jobTitle: 'Junior UI/UX Designer',
                    jobDescription: 'We are hiring for the position of a junior UI/UX designer at Veoc tech. The ideal candidate is expected to...',
                    location: 'Remote',
                    salary: '$60k - $80k per year',
                    jobType: 'Full-time',
                },
                {
                    id: 2,
                    jobTitle: 'Junior UI/UX Designer',
                    jobDescription: 'We are hiring for the position of a junior UI/UX designer at Veoc tech. The ideal candidate is expected to...',
                    location: 'Remote',
                    salary: '$60k - $80k per year',
                    jobType: 'Full-time',
                },
            ]
        }
    ]

    return (
        <div className='career__page'>
            <section className="careers">
                <div className="container py-5">
                    <h1>Join Us. We are hiring!</h1>

                    <div className="jobs mt-4">
                        {
                            jobs.map((job) => (
                                <div className="job row mt-4">
                                    <div className="col-lg-4 col-md-4">
                                        <h5 className='mb-4'>{job.department}</h5>
                                    </div>
                                    <div className="col-lg-8 col-md-8 mb-4">
                                        {
                                            job.availableJobs.map((item) => (
                                                    <div className='right pt-3'>
                                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                                            <h5>{item.jobTitle}</h5>
                                                            <NavLink to={`/careers/${item.id}`} className='pill grey__pill desktop'>View</NavLink>
                                                        </div>
                                                        <p className='mb-3'>{item.jobDescription}</p>
                                                        <div className="d-flex flex-wrap mb-4">
                                                            <div className="pill grey__pill me-2">{item.location}</div>
                                                            <div className="pill grey__pill me-2">{item.salary}</div>
                                                            <div className="pill grey__pill">{item.jobType}</div>
                                                        </div>
                                                    </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;