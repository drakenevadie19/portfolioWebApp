import SchoolImage from "./schools-image";

const EducationPage = ({ educationList }) => (
    <>
        <div className="education"><SchoolImage id="imageHere" srcName={educationList[0].imagesrc} />
            <div className="education-box">
                {educationList.map(schools => (
                    <details key={schools.name}>
                        <summary><a onClick={changeImage(schools.imagesrc)}><h1>{schools.name}</h1></a></summary>
                        <p>{schools.major}</p>
                        <p>{schools.location}</p>
                        <p>{schools.minor}</p>
                        <p>{schools.gpa}</p>
                    </details>
                ))}
            </div>
        </div>
    </>
);

const changeImage = ({imagesrc}) => {
    let image = document.getElementById("imageHere");
    console.log(image);
    // if (imagesrc != null) {
    //     image = imagesrc;
    // }
}

export default EducationPage;