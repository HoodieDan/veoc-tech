import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

const ServiceFAQ = () => {
    const [faqIsOpen, setFaqIsOpen] = useState<number | null>(null);

    const faqs = [
        {
            question: "What types of websites do you specialize in building",
            answer: "We specialize in building websites for businesses and startups. We create custom websites that are tailored to your brand and goals. We also offer website maintenance and support services to help you keep your website up and running.",
        },
        {
            question:
                "What is your typical process for a web development project, and what kind of involvement is required from my end?",
            answer: "Our process typically involves a collaborative approach, where we start with a discovery phase to understand your business needs and goals. We then create a detailed project plan, including wireframes, design mockups, and a development timeline. Throughout the project, we maintain open communication, providing regular updates and ensuring that you are involved in every step of the process. We also offer ongoing support and maintenance to ensure your website remains up-to-date and performing at its best.",
        },
        {
            question:
                "What are your pricing structures, and what factors influence the overall cost of a website?",
            answer: "Our pricing structures are flexible and tailored to your specific needs. We offer competitive rates for various website development projects, including basic landing pages, multi-page websites, and e-commerce platforms. The cost of a website depends on factors such as the complexity of the design, the number of pages, and the features you require. We provide transparent pricing and detailed quotes to help you understand the total cost of your project.",
        },
        {
            question:
                "Do you offer ongoing support and maintenance after the website is launched?",
            answer: "Yes, we offer ongoing support and maintenance services to ensure your website remains up-to-date and performing at its best. We provide regular updates, security patches, and technical support to help you manage your website effectively.",
        },
        {
            question:
                "What is your estimated timeline for completing a web development project?",
            answer: "The timeline for completing a web development project depends on the complexity of the project. We typically provide a detailed project timeline during the discovery phase, which includes design, development, testing, and launch. We ensure that the project is completed within the agreed-upon timeline, and we keep you updated on our progress throughout the process.",
        },
    ];

    const toggleDropdown = (index: number) => {
        if (faqIsOpen === index) {
            setFaqIsOpen(null);
        } else {
            setFaqIsOpen(index);
        }
    };

    return (
        <div className="service__faqs d-flex flex-column gap-md-5 gap-3">
            <div className="service__faqs__top d-flex flex-column gap-4 align-items-center">
                <div className="pill py-2 px-3">
                    <small className="fade__text">WHY CHOOSE US</small>
                </div>
                <h3 className="reveal__text">Frequently Asked Questions</h3>
            </div>

            <div className="service__faqs__questions d-flex justify-content-center align-items-center flex-column">
                {faqs.map((faq, index) => (
                    <div
                        className="service__faqs__questions__question row mt-2 w-100"
                        key={index}
                        onClick={() => toggleDropdown(index)}
                    >
                        <div className="col-11">
                            <h6>{faq.question}</h6>
                        </div>
                        <div className="col-1 d-flex justify-content-center align-items-center arrow">
                            {faqIsOpen === index ? <RemoveIcon /> : <AddIcon />}
                        </div>
                        {faqIsOpen === index && (
                            <div className="row">
                                <div className="col-11">
                                    <p className="fade__up__text">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceFAQ;
