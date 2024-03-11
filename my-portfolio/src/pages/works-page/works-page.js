import WorkExperience from "./work-experience";
import workdata from "./work-data";

const WorksPage = () => (
    <>
        <div id="page-body">
            <div className="work-page">
                {/* <div className="imageWorks">
                    <div className="polaroid rotate_right">
                        <img src="/works/FPT onboards.jpg" alt="FPT welcome" className="polaroid-image"></img>
                        <p>Since my internship is remote, this is my offer letter!</p>
                    </div>

                    <div className="polaroid rotate_left">
                        <img src="/inDeskCS.jpeg" alt="CSTA" className="polaroid-image"></img>
                        <p>Being a Computer Science TA be like...</p>
                    </div>

                    <div className="polaroid rotate_right">
                        <img src="/works/CSTA.png" alt="MC" className="polaroid-image"></img>
                        <p>Working in Math Clinics</p>
                    </div>
                </div> */}
                <div className="infoWorks">
                    <div className="placeholder-Image">
                        <img src="/internship.png" alt="Programmer"/>
                    </div>
                    <h1>Internship</h1>
                    <WorkExperience works={workdata[0]} />
                    <h1>On-campus Jobs</h1>
                    <WorkExperience works={workdata[1]} />
                    <WorkExperience works={workdata[2]} />
                    <WorkExperience works={workdata[3]} />
                    <WorkExperience works={workdata[4]} />
                </div>
            </div>
        </div>
    </>
)

export default WorksPage;