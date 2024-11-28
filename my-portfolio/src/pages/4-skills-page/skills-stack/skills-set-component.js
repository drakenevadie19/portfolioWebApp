import skillsData from "./skills-data";
import SkillsSet from "./skills-in-corresponding-set";
import "../skill-page.css";

const SkillsSetComponent = () => {
    return (
        <>
            <div className="skills-set-component">
                <h2 className="skills-set-component-h2">Technologies</h2>
                <div className="skills-block">
                    {skillsData.map((setOfskills, index) => (
                        <SkillsSet skillsset={setOfskills} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default SkillsSetComponent;