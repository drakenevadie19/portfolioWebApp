import FrontEndChart from "./front-end-chart";
import SkillsSetComponent from "./skills-stack/skills-set-component";
import "./skill-page.css";

const SkillPage = () => {
    return (
        <>
            <div className="page-body" id="skill-block">
                <div className="chart-of-skills-frame">
                    <FrontEndChart />
                </div>

                <div className="skill-set-components">
                    <SkillsSetComponent />
                </div>
            </div>
        </>
    );
}

export default SkillPage;