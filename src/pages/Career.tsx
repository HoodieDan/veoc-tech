import React from 'react';
import { NavLink } from 'react-router-dom';
import { Job } from '../api/services';
import { useJobs } from '../api/hooks';
import { stripHtmlTags } from '../helpers/stripHtmlTags';

const Career: React.FC = () => {
    const { data: jobsData, isLoading, error } = useJobs("Open");

    const groupJobsByDepartment = (): any[] => {
        if (!jobsData?.jobs) return [];

        const groupedJobs: any = jobsData.jobs.reduce((acc: any, job: Job) => {
            const dept = job.dept || 'Other';
            if (!acc[dept]) {
                acc[dept] = [];
            }
            acc[dept].push({
                id: job._id,
                jobTitle: job.title,
                jobDescription: job.desc,
                location: job.location,
                salary: job?.salary || 'Competitive',
                jobType: job.job_type,
            });
            return acc;
        }, {});

        return Object.entries(groupedJobs).map(([department, availableJobs]) => ({
            department,
            availableJobs,
        }));
    };

    const jobs = groupJobsByDepartment();

    if (isLoading) return <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{ height: 'calc(100dvh - 100px)' }}
    >Loading job listings...</div>;
    if (error) return <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{ height: 'calc(100dvh - 100px)' }}
    >Error loading jobs: {error.message}</div>;

    return (
        <div className='career__page'>
            <section className="careers">
                <div className="container py-5">
                    <h1>Join Us. We are hiring!</h1>

                    <div className="jobs mt-4">
                        {jobs.length > 0 ? (
                            jobs.map((job, index) => (
                                <div className="job row mt-4" key={`dept-${index}`}>
                                    <div className="col-lg-4 col-md-4">
                                        <h5 className='mb-4'>{job.department}</h5>
                                    </div>
                                    <div className="col-lg-8 col-md-8 mb-4">
                                        {job.availableJobs.map((item: any, jobIndex: any) => (
                                            <div className='right pt-3' key={`job-${item.id}-${jobIndex}`}>
                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                    <h5>{item.jobTitle}</h5>
                                                    <NavLink to={`/careers/${item.id}`} className='pill grey__pill desktop'>View</NavLink>
                                                </div>
                                                <p className='mb-3'>{stripHtmlTags(item.jobDescription)}</p>
                                                <div className="d-flex flex-wrap mb-4">
                                                    <div className="pill grey__pill me-2">{item.location}</div>
                                                    <div className="pill grey__pill me-2">{item.salary}</div>
                                                    <div className="pill grey__pill">{item.jobType}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-4">
                                <p>No open positions at the moment. Please check back later!</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;