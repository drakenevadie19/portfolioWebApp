import WorkExperience from "./work-experience";
import workdata from "./work-data";
import "./works-page.css"
import { useEffect, useState } from "react";
import WorkExperienceDetailPage from "./work-experience-detail-page";

const WorksPage = () => {

    const [displayingWorkBox, setDisplayingWorkBox] = useState(false);
    const [currentBoxToOpen, setCurrentBoxToOpen] = useState(0);    
    const [scrollY, setScrollY] = useState(0); // Store current scroll position

    const openBox = (id) => {
        setScrollY(window.scrollY); // Capture current scroll position
        setCurrentBoxToOpen(id);
        setDisplayingWorkBox(true);
    }

    // Lock the page's scroll position when the popup is displayed
    useEffect(() => {
        if (displayingWorkBox) {
            document.body.style.position = "fixed";
            // document.body.style.top = `-${scrollY}px`; // Keep the view locked
            window.scrollTo(0, 0); // Restore scroll position
        } else {
            document.body.style.position = "";
            document.body.style.top = ""; // Reset styles
            window.scrollTo(0, scrollY); // Restore scroll position
        }
    }, [displayingWorkBox, scrollY]);

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
                                    <div className="w-e-job" onClick={() => openBox(0)}><WorkExperience works={workdata[0]} index={0} /></div>
                                </li>
                                <li>
                                    <div className="w-e-time"><h4>{workdata[1].time}</h4></div>
                                    <div className="w-e-job" onClick={() => openBox(1)}><WorkExperience works={workdata[1]} index={1} /></div>
                                </li>
                                <li>
                                    <div className="w-e-time"><h4>{workdata[2].time}</h4></div>
                                    <div className="w-e-job" onClick={() => openBox(2)}><WorkExperience works={workdata[2]} index={2} /></div>
                                </li>
                                <li>
                                    <div className="w-e-time"><h4>{workdata[3].time}</h4></div>
                                    <div className="w-e-job" onClick={() => openBox(3)}><WorkExperience works={workdata[3]} index={3} /></div>
                                </li>
                                <li>
                                    <div className="w-e-time"><h4>{workdata[4].time}</h4></div>
                                    <div className="w-e-job" onClick={() => openBox(4)}><WorkExperience works={workdata[4]} index={4} /></div>
                                </li>
                                <li>
                                    <div className="w-e-time"><h4>{workdata[5].time}</h4></div>
                                    <div className="w-e-job" onClick={() => openBox(5)}><WorkExperience works={workdata[5]} index={5} /></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={displayingWorkBox ? "we-to-display-work" : "not-we-to-display-work"}>
                    <div className="work-box-close-button" onClick={() => setDisplayingWorkBox(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </div>
                    <div className="work-box">
                        <WorkExperienceDetailPage id={currentBoxToOpen} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorksPage;