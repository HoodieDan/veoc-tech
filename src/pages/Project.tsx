import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { portfolio } from "../lib/data";

const Project = () => {
    const { id: projectId } = useParams();
    const project = useMemo(() => portfolio.find(({ id }) => id === projectId), [projectId])!;

    return (
        <section className="project">
            <div className="project__header row gap-4 justify-content-between align-items-center">
                <div className="col-sm-6 d-flex flex-column gap-3">
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                </div>
                <div className="col-sm-2 d-flex flex-column gap-3">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="project__tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <hr className="project__separator" />
            <div className="project__showcase">
                {project.showcase.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Showcase ${index + 1}`}
                        className="img-fluid project__showcase__image"
                    />
                ))}
            </div>
        </section>
    );
};

export default Project;
