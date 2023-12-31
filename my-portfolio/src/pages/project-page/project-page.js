import React, { useState } from 'react';

const ProjectPage = ({projects}) => {
    const [visibility, setVisibility] = useState(true);
    
    const toggleVisibility = () => {
        setVisibility(!visibility);
    };

    return (
        <> 
            <div id="page-body">
                <div className="project-wrap">
                    <div className="projects">
                        {projects.map((project, index) => (
                            <div className="card" key={index}>
                                <img src={project.src} className="card-img-top" alt={project.name} />
                                <div class="card-body inside-card">
                                    <h5 class="card-title">{project.name}</h5>

                                    {visibility ? (
                                        <>
                                            <p className="card-text">{project.description.substring(0, 100)}...</p>
                                            <button type="button" class="btn btn-success more" onClick={toggleVisibility}>
                                                View more 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                                </svg>
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <p className="card-text">{project.description}</p>
                                            <button type="button" class="btn btn-success less" onClick={toggleVisibility}>
                                                View less 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                                                    <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                                                </svg>
                                            </button>
                                        </>
                                    )}
                                    
                                    <a href={project.link} class="btn btn-primary" target="_blank" rel="noreferrer">Go to Github Repository</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPage;