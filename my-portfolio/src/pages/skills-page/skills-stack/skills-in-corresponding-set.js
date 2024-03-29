// Use to render block of skill set (FE, BE, DB)

const SkillsSet = ({skillsset}) => {
    return (
        <>
            <div className="individual-skill-set">
                <h3>{skillsset.name}</h3>
                <div className="skill-stack-list">
                    {skillsset.skills.map((skill) => (
                        <a href="#">
                            <img src={`https://skillicons.dev/icons?i=${skill}`} alt={skill} />
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SkillsSet;