import { useEffect, useState } from "react";
import ProjectRender from "./project-render";
import "./css/project-page.css";
import ProjectFilter from "./project-filter-component";

const ProjectPage = ({ projects }) => {
  const [currentIndexOfProjectDisplaying, setCurrentIndexOfProjectDisplaying] = useState(0);

  // Number of to-render projects
  const [numberOfToRenderProjects, setNumberOfToRenderProjects] = useState(projects.length);

  // Hold all project displaying in the project list tab
  const [toRenderProjects, setToRenderProjects] = useState(projects);

  //  => when filter, add project having that skills to the list
  // Since method is to click to render project => this hold to render project
  const [currentProject, setCurrentProject] = useState(toRenderProjects[0]);

  // let usingFilter = false;

  const changeProjectToRender = (newProject, index) => {
    setCurrentProject(newProject);
    // console.log(newProject);
    setCurrentIndexOfProjectDisplaying(index);
  };

  // Open project list box in the size of phone
  // Open Box of projects
  const [toOpenBox, setToOpenBox] = useState(false);
  const [scrollY, setScrollY] = useState(0); // Store current scroll position
  const [usingFilter, setUsingFilter] = useState(false);
  const [scrollY2, setScrollY2] = useState(0); // Store current scroll position

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

  //  Lock the page's scroll position when the popup is displayed
  useEffect(() => {
    if (usingFilter) {
      document.body.style.position = "fixed";
      // document.body.style.top = `-${scrollY}px`; // Keep the view locked
      window.scrollTo(0, 0); // Restore scroll position
    } else {
      document.body.style.position = "";
      document.body.style.top = ""; // Reset styles
      window.scrollTo(0, scrollY2); // Restore scroll position
    }
  }, [usingFilter, scrollY2]);

  const openToChooseProjects = () => {
    setScrollY(window.scrollY); // Capture current scroll position
    setToOpenBox(true);
  };

  const openFilterComponent = () => {
    setScrollY2(window.scrollY); // Capture current scroll position
    setUsingFilter(true);
    // usingFilter = true;
    // console.log(usingFilter);
  }

  const [filterTech, setFilterTech] = useState([]); // <== lifted state

  return (
    <>
      <div className="page-body-projects" id="project-block">
        <div className="projects-portion-title-frame">
          <h1 className="projects-portion-title">Capstone projects</h1>
        </div>
        <div className="project-blog-box">
          <p>To understand more about how I brainstorm projects, please view in my blog <span><a href="https://drakedo-projects-explaining.blogspot.com/" target="_blank" rel="noreferrer">here</a></span></p>
        </div>
        <div className="project-wrap">
          {/* Left Tab of the project view */}
          <div className="project-list-tab">
            <div className="project-list-tab-title">
              <button
                type="button"
                className="btn btn-success tech-stack-element-filter-button"
                onClick={openFilterComponent}
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
                </svg>
              </button>

              <h3 className="project-list-tab-header">
                My projects
              </h3>

              <h3 className="project-list-tab-header">
                [{numberOfToRenderProjects}]
              </h3>
            </div>

            {/* Only for small devices only */}
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

          {/* On Small Devices onlt */}
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

          {/* Right Tab of the project view */}
          <ProjectRender project={currentProject} />
        </div>

      </div>

      {/* Filter By Technologies View */}
        {usingFilter 
          &&
          <ProjectFilter 
            projects={projects} 
            filterTech={filterTech}
            setFilterTech={setFilterTech}
            setUsingFilter={setUsingFilter}
            setToRenderProjects={setToRenderProjects} 
            setNumberOfToRenderProjects={setNumberOfToRenderProjects} 
            setCurrentProject={setCurrentProject}
          />
        }
    </>
  );
};

export default ProjectPage;