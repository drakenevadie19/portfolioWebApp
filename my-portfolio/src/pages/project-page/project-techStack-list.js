const ProjectStack = ({techStacks}) => {
    return (
        <>
            {techStacks.map((tech, index) => (
                <a key={index} className='tech-stack-element'>{tech}</a>
            ))}
        </>
    );
}

export default ProjectStack;