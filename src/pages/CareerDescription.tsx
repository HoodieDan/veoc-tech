import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useJob } from '../api/hooks';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ApplicationModal from '../components/ApplicationModal';

const CareerDescription: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data: job, isLoading, error } = useJob(id!);
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModalVisibility = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const goBack = () => {
        navigate(-1);
    };

    if (isLoading) return <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{ height: 'calc(100dvh - 100px)' }}
    >Loading job listings...</div>;
    if (error) return <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{ height: 'calc(100dvh - 100px)' }}
    >Error loading jobs: {error.message}</div>;

    return (
        <div className={`career__description ${modalIsOpen ? 'modal__open' : ''}`}>
            {modalIsOpen && (
                <ApplicationModal toggleModalVisibility={toggleModalVisibility} />
            )}

            <section className="description">
                <div className="container py-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div onClick={goBack} className="d-flex align-items-center">
                            <ArrowBackIosIcon />
                            <h5>{job?.title || 'Job Title'}</h5>
                        </div>

                        <button onClick={toggleModalVisibility}>
                            Apply here
                        </button>
                    </div>

                    <div className="mb-3">
                        <p>Location: {job?.location || 'Not specified'}</p>
                        <p>Job Type: {job?.job_type || 'Not specified'}</p>
                        <p>Experience Level: {job?.experience || 'Entry-Level'}</p>
                    </div>

                    <div className="mb-3">
                        <h5>About Us</h5>
                        <p>{job?.desc || 'About Veoc Tech'}</p>
                    </div>

                    <div className="mb-3">
                        <h5>Job Overview</h5>
                        <p>{job?.desc || 'We’re looking for a Junior UI/UX Designer'}</p>
                    </div>
                    <div className="mb-3">
                        <h5>Key Responsibilities/Requirements</h5>
                        <p>{job?.desc || 'See Job Description'}</p>
                    </div>

                    <div className="mb-4">
                        <h5>Perks and Benefits</h5>
                        <ul>
                            <li>Work on exciting projects.</li>
                            <li>Flexible work environment.</li>
                            <li>Competitive salary.</li>
                        </ul>
                    </div>

                    <button className="mb-5" onClick={toggleModalVisibility}>Apply Here</button>
                </div>
            </section>
        </div>
    );
};

export default CareerDescription;
