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

                    <div className="copyright">
                        <b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
                            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"/>
                        </svg> </b>
                        <b><p>Picture copyright belong to internet</p></b>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}

export default ProjectPage;