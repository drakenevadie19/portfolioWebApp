import React, { useEffect, useState } from 'react';
import ProjectRender from './project-render';

const ProjectPage = ({projects}) => {
    const [currentProject, setCurrentProject] = useState(projects[0]);
    // const [filteredProjects, setFilterdProjects] = useState();

    const [usedFilter, setUsedFilter] = useState(false);

    const changeProjectToRender = (newProject) => {
        setCurrentProject(newProject);
        console.log(newProject);
    }

    return (
        <> 
            <div id="page-body">
                <div className='filter'>
                    {
                        usedFilter === false
                        ?  
                            <a className='tech-stack-element' onClick={() => setUsedFilter(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
                                </svg> Filter
                            </a>
                        : 
                            <a className='tech-stack-element' onClick={() => setUsedFilter(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
                                </svg> Reset filter
                            </a>
                    }
                </div>

                <div className="project-wrap">
                    <div className="project-list-tab">
                        <h2>Click to view projects:</h2>
                        {projects.map((project, index) => (
                            <a key={index} onClick={() => changeProjectToRender(project)}>{project.name}</a>
                        ))}
                    </div>
                    <ProjectRender project = {currentProject} />
                </div>
            </div>
        </>
    )
}

export default ProjectPage;