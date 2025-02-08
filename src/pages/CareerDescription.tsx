import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ApplicationModal from '../components/ApplicationModal';

const CareerDescription: React.FC = () => {

    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModalVisibility = () => {
        setModalIsOpen(!modalIsOpen);
    }

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className={`career__description ${modalIsOpen ? 'modal__open' : ''}`}>

            {
                modalIsOpen && (
                    <ApplicationModal toggleModalVisibility={toggleModalVisibility} />
                )
            }

            <section className="description">
                <div className="container py-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div onClick={goBack} className="d-flex align-items-center">
                            <ArrowBackIosIcon />
                            <h5>Junior UI/UX Designer</h5>
                        </div>

                        <button onClick={toggleModalVisibility}>
                            Apply here
                        </button>
                    </div>

                    <div className="mb-3">
                        <p>Location: Remote</p>
                        <p>Joy Type: Full-Time</p>
                        <p>Experience Level: Entry-Level (0-2 years)</p>
                    </div>

                    <div className="mb-3">
                        <h5>About Us</h5>
                        <p>
                            Veoc Tech is a dynamic design agency specializing in crafting seamless and engaging digital experiences. We work with startups and established brands to create innovative UI/UX solutions that drive impact. Our team thrives on creativity, collaboration, and user-centered design principles.
                        </p>
                    </div>

                    <div className="mb-3">
                        <h5>Job Overview</h5>
                        <p>
                            We’re looking for a Junior UI/UX Designer to join our growing team! In this role, you’ll collaborate with designers, developers, and strategists to create intuitive and visually appealing digital products. If you have a passion for design, a strong eye for detail, and a user-first mindset, we’d love to hear from you.
                        </p>
                    </div>

                    <div className="mb-3">
                        <h5>Key Responsibilities</h5>
                        <ul>
                            <li>Assist in designing user-friendly web and mobile interfaces.</li>
                            <li>Conduct user research, including surveys and usability testing, to gather insights.</li>
                            <li>Create wireframes, prototypes, and high-fidelity UI designs using Figma or other design tools.</li>
                            <li>Work closely with developers to ensure design feasibility and consistency.</li>
                            <li>Improve accessibility and usability across projects.</li>
                            <li>Iterate on designs based on feedback from users and stakeholders.</li>
                            <li>Stay up-to-date with the latest UI/UX trends and best practices.</li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <h5>Requirements</h5>
                        <ul>
                            <li>0-2 years of experience in UI/UX design (internship or personal projects count!).</li>
                            <li>Proficiency in Figma, Adobe XD, or Sketch for wireframing and prototyping.</li>
                            <li>Basic understanding of user research methods and accessibility design.</li>
                            <li>Strong visual design skills and attention to detail.</li>
                            <li>Familiarity with design systems and responsive design principles.</li>
                            <li>Ability to collaborate in a fast-paced, team-oriented environment.</li>
                            <li>Strong communication skills to present ideas effectively.</li>
                            <li>(Bonus) Experience with HTML, CSS, or motion design is a plus!</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h5>Perks and Benefits</h5>
                        <ul>
                            <li>Work on exciting projects for diverse clients.</li>
                            <li>Learn and grow with mentorship from senior designers.</li>
                            <li>Flexible work environment (remote/hybrid options available).</li>
                            <li>Competitive salary and opportunities for career advancement.</li>
                        </ul>
                    </div>

                    <button className="mb-5" onClick={toggleModalVisibility}>Apply Here</button>
                </div>
            </section>
        </div>
    );
};

export default CareerDescription;