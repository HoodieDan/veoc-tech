import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useGsapAnimations } from "../hooks/useGsapAnimation";
import useScrollToTop from "../hooks/useScrollToTop";
import { portfolio } from "../lib/data";

const Project = () => {
    useScrollToTop();
    useGsapAnimations();

    const { slug: projectSlug } = useParams();
    const project = useMemo(
        () => portfolio.find(({ slug }) => slug === projectSlug),
        [projectSlug],
    )!;

    return (
        <section className="project">
            <div className="project__header row gap-4 justify-content-between align-items-center">
                <div className="col-sm-6 d-flex flex-column gap-3">
                    <h1 className="reveal__text">{project.name}</h1>
                    <p className="fade__text">{project.description}</p>
                </div>
                <div className="col-sm-2 d-flex flex-column gap-3">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="project__tag reveal__text">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <hr className="project__separator" />
            <div className="project__showcase">
                {project.showcase.map((image, index) => {
                    const fullSpanIndices = project.fullSpanIndices;
                    const isFullSpan = fullSpanIndices.includes(index + 1);

                    return (
                        <img
                            key={image + index}
                            src={image}
                            alt={`${project.name} ${index + 1}`}
                            className={`img-fluid ${
                                isFullSpan
                                    ? "project__showcase__image--full-span"
                                    : ""
                            }`}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Project;
