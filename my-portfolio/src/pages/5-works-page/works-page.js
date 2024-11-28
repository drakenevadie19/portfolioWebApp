import WorkExperience from "./work-experience";
import workdata from "./work-data";
import "./works-page.css"
import { useState } from "react";

const WorksPage = () => {

    const [displayingWorkBox, setDisplayingWorkBox] = useState(false);

    return (
        <>
            <div className="page-body-works" id="work-block">
                <div className="work-page">
                    <div className="infoWorks">
                        <div className="placeholder-Image">
                            {/* <img src="/internship.png" alt="Programmer"/> */}
                            <h1><b>Professional Experiences</b></h1>
                        </div>

                        <div className="work-experience-timeline">
                            <ul className="timeline">
                                <li>
                                    <div className="w-e-time"><h4>{workdata[0].time}</h4></div>
                                    <div className="w-e-job" onClick={() => setDisplayingWorkBox(true)}><WorkExperience works={workdata[0]} index={0} /></div>
                                </li>
                                <li>
                                    <div className="w-e-time"><h4>{workdata[1].time}</h4></div>
                                    <div className="w-e-job" onClick={() => setDisplayingWorkBox(true)}><WorkExperience works={workdata[1]} index={1} /></div>
                                </li>
                                <li>
                                    <div className="w-e-time"><h4>{workdata[2].time}</h4></div>
                                    <div className="w-e-job" onClick={() => setDisplayingWorkBox(true)}><WorkExperience works={workdata[2]} index={2} /></div>
                                </li>
                                <li>
                                    <div className="w-e-time"><h4>{workdata[3].time}</h4></div>
                                    <div className="w-e-job" onClick={() => setDisplayingWorkBox(true)}><WorkExperience works={workdata[3]} index={3} /></div>
                                </li>
                                <li>
                                    <div className="w-e-time"><h4>{workdata[4].time}</h4></div>
                                    <div className="w-e-job" onClick={() => setDisplayingWorkBox(true)}><WorkExperience works={workdata[4]} index={4} /></div>
                                </li>
                                <li>
                                    <div className="w-e-time"><h4>{workdata[5].time}</h4></div>
                                    <div className="w-e-job" onClick={() => setDisplayingWorkBox(true)}><WorkExperience works={workdata[5]} index={5} /></div>
                                </li>
                            </ul>
                        </div>

                        <div className={displayingWorkBox ? "we-to-display-work" : "not-we-to-display-work"}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorksPage;