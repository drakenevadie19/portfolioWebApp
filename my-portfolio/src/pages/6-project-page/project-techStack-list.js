const ProjectStack = ({techStacks}) => {
    return (
        <>
            <div className="tech-stack-list">
                {techStacks.map((tech, index) => (
                    <p key={index} className='tech-stack-element'>{tech}</p>
                ))}
            </div>
        </>
    );
}

export default ProjectStack;