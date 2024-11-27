import BackEndChart from "./back-end-chart";
import FrontEndChart from "./front-end-chart";
import SkillsSetComponent from "./skills-stack/skills-set-component";

import "./skill-page.css";

const SkillPage = () => {
    return (
        <>
            <div id="page-body">
                <div className="chartOfSkills">
                    <div className="chart-of-skills-frame">
                        <FrontEndChart />
                    </div>
                    <div className="chart-of-skills-frame">
                        <BackEndChart />
                    </div>
                </div>

                <div>
                    <SkillsSetComponent />
                </div>
            </div>
        </>
    );
}

export default SkillPage;