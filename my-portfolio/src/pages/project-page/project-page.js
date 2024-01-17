import React, { useState } from 'react';
import ProjectRender from './project-render';

const ProjectPage = ({projects}) => {
    const [currentProject, setCurrentProject] = useState(projects[0]);

    const changeProjectToRender = (newProject) => {
        setCurrentProject(newProject);
        console.log(newProject);
    }

    return (
        <> 
            <div id="page-body">
                <div className="project-wrap">
                    <div className="project-list-tab">
                        <h2>Click to view Projects:</h2>
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