import React, { useEffect, useState } from "react";
import ProjectRender from "./project-render";

import "./project-page.css";

const ProjectPage = ({ projects }) => {
  const [usingFilter, setUsingFilter] = useState(false);
  const [currentIndexOfProjectDisplaying, setCurrentIndexOfProjectDisplaying] =
    useState(0);

  // Number of to-render projects
  const [numberOfToRenderProjects, setNumberOfToRenderProjects] = useState(
    projects.length
  );

  // Hold all project displaying in the project list tab
  const [toRenderProjects, setToRenderProjects] = useState(projects);

  //  => when filter, add project having that skills to the list
  // Since method is to click to render project => this hold to render project
  const [currentProject, setCurrentProject] = useState(projects[0]);

  // List of all techs exists => These are critique use to filter corresponding projects
  const [techInProject, setTechInProject] = useState([]);

  // List of picked technologies by users
  const [pickedTechnologies, setPickedTechnologies] = useState([]);

  // Corresponding projects
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Array to hold states of each button
  const [buttonStates, setButtonStates] = useState(new Array(100).fill(false));

  const changeProjectToRender = (newProject, index) => {
    setCurrentProject(newProject);
    // console.log(newProject);
    setCurrentIndexOfProjectDisplaying(index);
  };

  useEffect(() => {
    // Filtering list of technologies from projects
    //  Only filering when the project is loaded
    const allTechs = new Set(); // Use Set for efficient tech collection

    projects.forEach((project) => {
      project.techStack.forEach((tech) => {
        allTechs.add(tech); // Add unique techs to the Set
      });
    });

    setTechInProject(Array.from(allTechs)); // Convert Set to an array for rendering
  }, [projects]); // Re-run on project changes

  // use index as parameter to manage the status of corresponding techStack in techInProject
  const chooseTech = (event, index) => {
    setUsingFilter(true);
    const clickedTech = event.target.textContent;
    // console.log(clickedTech + `${typeof(choseTech)}`);
    if (!pickedTechnologies.includes(clickedTech)) {
      // This is to change the status of the current button (clicked or not)
      // Create a copy of the button states array
      const newButtonStates = [...buttonStates];
      // Toggle the state of the clicked button
      newButtonStates[index] = !newButtonStates[index];
      // Update the state with the new array
      setButtonStates(newButtonStates);

      pickedTechnologies.push(clickedTech);
    } else {
      // This is to change the status of the current button (clicked or not)
      // Create a copy of the button states array
      const newButtonStates = [...buttonStates];
      // Toggle the state of the clicked button
      newButtonStates[index] = !newButtonStates[index];
      // Update the state with the new array
      setButtonStates(newButtonStates);

      pickedTechnologies.pop(clickedTech);
      if (pickedTechnologies.length === 0) {
        setUsingFilter(false);
      }
    }
    console.log(pickedTechnologies);
  };

  const resetFilter = () => {
    setUsingFilter(false);
    setToRenderProjects(projects);
    setPickedTechnologies([]);
    setCurrentProject(projects[0]);
    setFilteredProjects([]);
    setNumberOfToRenderProjects(projects.length);

    // Restore the background color of the technologies button if it was chosen
    buttonStates.map((element, index) => {
      if (buttonStates[index]) buttonStates[index] = false;
      return 0;
    });

    console.log(techInProject);
  };

  const searchNow = () => {
    console.log(pickedTechnologies);
    pickedTechnologies.map((pickedtech) =>
      projects.map((project) => {
        if (
          project.techStack.includes(pickedtech) &&
          !filteredProjects.includes(project)
        )
          filteredProjects.push(project);
        return 0;
      })
    );
    setToRenderProjects(filteredProjects);
    setNumberOfToRenderProjects(filteredProjects.length);
  };
  // Open Box of projects
  const [toOpenBox, setToOpenBox] = useState(false);
  const [scrollY, setScrollY] = useState(0); // Store current scroll position

  //  Lock the page's scroll position when the popup is displayed
  useEffect(() => {
    if (toOpenBox) {
      document.body.style.position = "fixed";
      // document.body.style.top = `-${scrollY}px`; // Keep the view locked
      window.scrollTo(0, 0); // Restore scroll position
    } else {
      document.body.style.position = "";
      document.body.style.top = ""; // Reset styles
      window.scrollTo(0, scrollY); // Restore scroll position
    }
  }, [toOpenBox, scrollY]);

  const openToChooseProjects = () => {
    setScrollY(window.scrollY); // Capture current scroll position
    setToOpenBox(true);
  };

  return (
    <>
      <div className="page-body-projects" id="project-block">
        <div className="projects-portion-title-frame">
          <h1 className="projects-portion-title">Capstone projects</h1>
        </div>
        <div className="project-blog-box">
          <p>To understand more about how I brainstorm projects, please view in my blog</p>
          <a href="https://drakedo-projects-explaining.blogspot.com/" target="_blank" rel="noreferrer">here</a>
        </div>
        <div className="project-wrap">
          {/* Rendering list of technologies to filter */}
          {/* <div className="filter">
            {techInProject.map((techIn, index) => {
              return (
                <p
                  key={index}
                  className={`${buttonStates[index]} ? "tech-stack-element tech-stack-element-clicked" : "tech-stack-element tech-stack-element-not-clicked "`}
                  onClick={(event) => chooseTech(event, index)}
                >
                  {techIn}
                </p>
              );
            })}
            <button
              type="button"
              className="btn btn-danger"
              onClick={searchNow}
            >
              Search
            </button>
          </div> */}

          <div className="project-list-tab">
            {/* <div className="filter-button">
              {usingFilter === false ? (
                // <a className='tech-stack-element-filter-button'>
                <button
                  type="button"
                  className="btn btn-outline-success tech-stack-element-filter-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-funnel"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                  </svg>{" "}
                  Filter
                </button>
              ) : (
                // <a className='tech-stack-element' onClick={resetFilter}>
                <button
                  type="button"
                  className="btn btn-success tech-stack-element-filter-button"
                  onClick={resetFilter}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-funnel-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
                  </svg>{" "}
                  Reset filter
                </button>
              )}
            </div> */}

            <h3 className="project-list-tab-header">
              My projects ({numberOfToRenderProjects})
            </h3>
            <div className="project-list-tab-list-of-projects-onSmallDevice">
              <button
                type="button"
                className="btn btn-success"
                onClick={openToChooseProjects}
              >
                Choose a project to view
              </button>
            </div>

            <div className="project-list-tab-list-of-projects-onLargeDevice">
              {toRenderProjects.map((project, index) => (
                // Adding a class so that when that project is rendering, its background in project is being rendered
                <p
                  key={index}
                  onClick={() => changeProjectToRender(project, index)}
                  className={
                    index === currentIndexOfProjectDisplaying
                      ? "project-clicked project-on-toDisplay"
                      : "project-on-toDisplay"
                  }
                >
                  {project.name}
                </p>
              ))}
            </div>
          </div>

          <div
            className={
              toOpenBox
                ? "projectbox-to-display-work"
                : "not-projectbox-to-display-work"
            }
          >
            <div
              className="work-box-close-button"
              onClick={() => setToOpenBox(false)}
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
            <div className="project-list-tab-list-of-projects project-box">
                <h1>Choose a project to display</h1>
                {toRenderProjects.map((project, index) => (
                    // Adding a class so that when that project is rendering, its background in project is being rendered
                    <p
                    key={index}
                    onClick={() => {
                        changeProjectToRender(project, index);
                        setToOpenBox(false);
                    }}
                    className={
                        index === currentIndexOfProjectDisplaying
                        ? "project-clicked project-on-toDisplay"
                        : "project-on-toDisplay"
                    }
                    >
                    {project.name}
                    </p>
                ))}
            </div>
          </div>
          <ProjectRender project={currentProject} />
        </div>
      </div>
    </>
  );
};

export default ProjectPage;