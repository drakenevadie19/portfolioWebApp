import React, { useEffect, useState } from 'react';
import ProjectRender from './project-render';

const ProjectPage = ({projects}) => {
    const [usingFilter, setUsingFilter] = useState(false);
    // Hold all project displaying in the project list tab
    const [toRenderProjects, setToRenderProjects] = useState(projects) 

    //  => when filter, add project having that skills to the list 
    // Since method is to click to render project => this hold to render project
    const [currentProject, setCurrentProject] = useState(projects[0]);

    // List of all techs exists => These are critique use to filter corresponding projects
    const [techInProject, setTechInProject] = useState([]);

    // List of picked technologies by users
    const [pickedTechnologies, setPickedTechnologies] = useState([]);
    // Corresponding projects
    const [filteredProjects, setFilteredProjects] = useState([]);
    // const [colorOfClickedTechToFilter, setColorOfClickedTechToFilter] = useState("#72FFFF");

    const changeProjectToRender = (newProject) => {
        setCurrentProject(newProject);
        console.log(newProject);
    }

    useEffect(() => {
        // Filtering list of technologies from projects
        //  Only filering when the project is loaded
        projects.map((element) => (
            element.techStack.map((tech) => {
                if (!techInProject.includes(tech)) {
                    techInProject.push(tech);
                }
            })
        ));
        console.log(techInProject);
    }, []);

    const chooseTech = (event) => {
        setUsingFilter(true);
        const clickedTech = event.target.textContent;
        // console.log(clickedTech + `${typeof(choseTech)}`);
        if (!pickedTechnologies.includes(clickedTech)) {
            // console.log(`${clickedTech} is clicked to add`);
            // setColorOfClickedTechToFilter("gray");
            pickedTechnologies.push(clickedTech);
        } else {
            // console.log(`${clickedTech} is clicked to remove`);
            // setColorOfClickedTechToFilter("#72FFFF");
            pickedTechnologies.pop(clickedTech);
        }
        console.log(pickedTechnologies);
    }

    // const clickedAndChangeBackgroundColor = {
    //     backgroundColor: colorOfClickedTechToFilter
    // }
    const resetFilter = () => {
        setUsingFilter(false);
        setToRenderProjects(projects);
        setPickedTechnologies([]);
        setCurrentProject(projects[0]);
        setFilteredProjects([]);
    }

    const searchNow = () => {
        console.log(pickedTechnologies);
        pickedTechnologies.map((pickedtech) => {
            projects.map((project) => {
                if (project.techStack.includes(pickedtech) && !filteredProjects.includes(project)) filteredProjects.push(project);
            })
        })
        setToRenderProjects(filteredProjects);
    }
    return (
        <> 
            <div id="page-body">
                <div className='filter'>
                    {
                        usingFilter === false
                        ?  
                            <a className='tech-stack-element'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
                                </svg> Filter
                            </a>
                        : 
                            <a className='tech-stack-element' onClick={resetFilter}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
                                </svg> Reset filter
                            </a>
                    }
                    {/* Rendering list of technologies to filter */}
                    {
                        techInProject.map(techIn => {
                            return (
                                <a className='tech-stack-element' onClick={chooseTech} href='#'>
                                    {techIn}
                                </a>
                            )
                        })
                    }
                    <button type="button" class="btn btn-danger" onClick={searchNow}>
                        Search
                    </button>
                </div>

                <div className="project-wrap">
                    <div className="project-list-tab">
                        <h3 className="project-list-tab-header">My Projects:</h3>
                        {toRenderProjects.map((project, index) => (
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