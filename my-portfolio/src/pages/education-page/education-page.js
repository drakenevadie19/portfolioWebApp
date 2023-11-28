import SchoolImage from "./schools-image";
import imageDB from "./images-db";

const EducationPage = ({ educationList }) => (
    <>
        <div className="education">
            <SchoolImage id="imageHere" />
            <div className="education-box">
                {educationList.map(schools => (
                    <>
                        <h1>{schools.name}</h1>
                        <h4>{schools.location}</h4>
                        <ul>
                            <li>Major: {schools.major}</li>
                            <li>Minor: {schools.minor !== "" ? schools.minor : "N/A"}</li>
                            <li>GPA: {schools.gpa}</li>
                        </ul>
                    </>
                ))}
            </div>
        </div>
    </>
);

export default EducationPage;