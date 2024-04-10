import skillsData from "./skills-data";
import SkillsSet from "./skills-in-corresponding-set";

const SkillsSetComponent = () => {
    return (
        <>
            <div className="skills-set-component">
                <h2 className="skills-set-component-h2">Tech stacks</h2>
                <div className="skills-block">
                    {skillsData.map((setOfskills) => (
                        <SkillsSet skillsset={setOfskills} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default SkillsSetComponent;