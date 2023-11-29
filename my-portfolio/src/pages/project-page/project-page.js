const ProjectPage = ({projects}) => (
    <> 
        <div className="projects">
            {projects.map((project, index) => (
                <div className="card" key={index}>
                    <img src={project.src} className="card-img-top" alt={project.name} />
                    <div class="card-body">
                        <h5 class="card-title">{project.name}</h5>
                        <p class="card-text">{project.description}</p>
                        <a href={project.link} class="btn btn-primary" target="_blank" rel="noreferrer">Go Github Repository</a>
                    </div>
                </div>
            ))}
        </div>
    </>
)

export default ProjectPage;