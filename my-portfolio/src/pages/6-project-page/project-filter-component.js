
import { useState } from "react";
import "./css/project-filter.css";
import technologies from "./data/project-technologies";

const ProjectFilter = ({ projects, setUsingFilter, setToRenderProjects, setNumberOfToRenderProjects, filterTech, setFilterTech, setCurrentProject }) => {
    // useEffect(() => {
    //     console.log("Openning dialog");
    // }, []);

    // const [filterTech, setFilterTech] = useState([]);
    const [participants, setParticipants] = useState([]);

    const addTechToFilterList = (tech) => {
        const trimmedTech = tech.trim();

        setFilterTech((prevFilterTech) => {
            if (prevFilterTech.includes(trimmedTech)) {
                // console.log("Deselected:", trimmedTech);
                return prevFilterTech.filter((t) => t !== trimmedTech);
            } else {
                // console.log("Selected new:", trimmedTech);
                return [...prevFilterTech, trimmedTech];
            }
        });

    };

    // const addParticipantToFilterList = (parti) => {
    //     const trimmedParti = parti.trim();
    //     setParticipants((prevPartiTech) => {
    //         if (prevPartiTech.includes(trimmedParti)) {
    //             console.log("Deselected:", trimmedParti);
    //             return prevPartiTech.filter((t) => t !== trimmedParti);
    //         } else {
    //             console.log("Selected new:", trimmedParti);
    //             return [...prevPartiTech, trimmedParti];
    //         }
    //     });
    // };

    const resetFilter = () => {
        setFilterTech([]);
        setToRenderProjects(projects);
        setNumberOfToRenderProjects(projects.length);
        setUsingFilter(false);
    }
 
    const submitAndFilter = () => {
        console.log("Prior projects list ", projects);
        const filteredProjects = projects.filter((project) =>
            filterTech.every((tech) =>
                project.techStack && project.techStack.includes(tech)
            )
        );

        console.log("Current filter list:", filterTech);
        console.log("Filtered projects:", filteredProjects);

        // Apply to the main view
        setToRenderProjects(filteredProjects);
        setNumberOfToRenderProjects(filteredProjects.length);
        setCurrentProject(filteredProjects[0]);
        setUsingFilter(false); // close the filter dialog
    };


    return (
        <div className="filter-component">
            <div
              className="work-box-close-button"
              onClick={() => setUsingFilter(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-x-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>

            <div className="filter-center-component">
                <h3>Filter By Technologies</h3>
                <div className="filter-center-component-techs">
                    {technologies.map((tech) => (
                        <div className="filter-center-component-techs-box">
                            <h4>{tech.type}</h4>
                            <div className="filter-center-component-techs-list">
                                {tech.technologiesList.map((tech, index) => (
                                    <button
                                        key={index}
                                        className={`technologies-element ${filterTech.includes(tech.trim()) ? 'selected' : ''}`}
                                        onClick={() => addTechToFilterList(tech)}
                                    >
                                        {tech}
                                    </button>

                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* <h3>Number of Participants</h3> */}
                
                <div className="filter-component-footer">
                    <button className='btn btn-danger reset-button' onClick={resetFilter}>
                        Reset Filter
                    </button>
                    <button className='btn btn-success filter-button' onClick={submitAndFilter}>
                        Filter
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ProjectFilter;