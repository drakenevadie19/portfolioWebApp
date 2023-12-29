import SchoolImage from "./schools-image";

const EducationPage = ({ educationList }) => (
    <>
        <div className="education">
            <SchoolImage id="imageHere" />
            <div className="education-box">
                {educationList.map(schools => (
                    <>
                        <h1>{schools.name}</h1>
                        <h4><i>{schools.location}</i></h4>
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