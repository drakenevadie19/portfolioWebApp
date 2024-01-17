const ProjectRender =({project}) => {
    return (
        <>
            <div className="project-render-wrap">
                <div className="project-render-first-block">
                    <div className="project-name-and-participant">
                        <div className="project-name">
                            <h3>{project.name}</h3>
                            {/* <h4>({project.workTime})</h4> */}
                        </div>
                        <div className="project-participant">
                            <h3>{project.workTime}</h3>
                        </div>
                    </div>

                    <div className="project-render-src">
                        <img src={project.src} alt="Project Image" className="project-render-src-here" />
                    </div>
                </div>
                
                <div className="project-tech-stack">
                    <h5>{project.techStack}</h5>
                </div>
                <div className="project-description">
                    <h5>{project.description}</h5>
                </div>
                <a href={project.link} class="btn btn-primary" target="_blank" rel="noreferrer">Explore more on my Github Repository</a>
            </div>
        </>
    );
}

export default ProjectRender;