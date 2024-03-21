import BackEndChart from "./back-end-chart";
import FrontEndChart from "./front-end-chart";

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
            </div>
        </>
    );
}

export default SkillPage;