const ProjectStack = ({techStacks}) => {
    return (
        <>
            <div className="tech-stack-list">
                {techStacks.map((tech, index) => (
                    <a key={index} className='tech-stack-element'>{tech}</a>
                ))}
            </div>
        </>
    );
}

export default ProjectStack;