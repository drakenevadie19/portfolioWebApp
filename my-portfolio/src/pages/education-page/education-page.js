import SchoolImage from "./schools-image";

const EducationPage = ({ educationList }) => (
    <>
        <div id="page-body">
            <div className="education">
                <SchoolImage id="imageHere" />
                <div className="education-box">
                    {educationList.map(schools => (
                        <>
                            <h1>{schools.name}</h1>
                            <h4><i>{schools.location}</i></h4>
                            <ul>
                                { schools.degree !== "N/A" && <li>Degree: {schools.degree}</li> }
                                <li>Major: {schools.major}</li>
                                { schools.minor !== "N/A" && <li>Minor: {schools.minor}</li> }
                                <li>GPA: {schools.gpa}</li>
                                { schools.honor !== "N/A" && <li>Honor Society && Organizations: <b><i>{schools.honor}</i></b></li> }
                            </ul>
                        </>
                    ))}
                </div>
            </div>
        </div>
    </>
);

export default EducationPage;