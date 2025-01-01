import GalleryCarousel from "../structure-page/gallery-carousel";
import schoolImageDB from "./images-db";
import "./education-page.css";

const EducationPage = ({ educationList }) => (
    <>
        <div className="page-body-edu" id="edu-block">
            <div className="education">
                <div className='main-page-image'>
                    <GalleryCarousel id="imageHere" imagesDB={schoolImageDB} />
                </div>
                <div className="education-box">
                    {educationList.map((schools, index) => (
                        <div key={index}>
                            <h1 className="school-name">{schools.name}</h1>
                            <h4 className="school-location"><i>{schools.location}</i></h4>
                            <ul>
                                { schools.degree !== "N/A" && <li><span className="edu-details">Degree:</span> {schools.degree}</li> }
                                <li><span className="edu-details">Major:</span> {schools.major}</li>
                                { schools.minor !== "N/A" && <li><span className="edu-details">Minor:</span> {schools.minor}</li> }
                                <li><span className="edu-details">GPA:</span> {schools.gpa}</li>
                                { schools.honor !== "N/A" && <li><span className="edu-details">Honor Society & Organizations:</span> <b><i>{schools.honor}</i></b></li> }
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
);

export default EducationPage;