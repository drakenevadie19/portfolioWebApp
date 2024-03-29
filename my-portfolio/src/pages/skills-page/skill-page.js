import BackEndChart from "./back-end-chart";
import FrontEndChart from "./front-end-chart";
import SkillsSetComponent from "./skills-stack/skills-set-component";

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

                {/* <div className="dm-or-scrolldown">
                    <div className="dm-or-scrolldown-frame">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </div>
                </div> */}

                <div>
                    <SkillsSetComponent />
                </div>
            </div>
        </>
    );
}

export default SkillPage;