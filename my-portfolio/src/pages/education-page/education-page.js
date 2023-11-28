import SchoolImage from "./schools-image";

const changeImage = ({imagesrc}) => {
    let image = document.getElementById("imageHere");
    console.log(image);
    if (imagesrc != null) {
        image.src = imagesrc;
    }
}

const EducationPage = ({ educationList }) => (
    <>
        <SchoolImage id="imageHere" srcName={educationList[0].imagesrc} />
        <div className="education-box">
            {educationList.map(schools => (
                <details key={schools.name}>
                    <summary><h1 onClick={changeImage(schools.imagesrc)}>{schools.name}</h1></summary>
                    <p>{schools.major}</p>
                    <p>{schools.location}</p>
                    <p>{schools.minor}</p>
                    <p>{schools.gpa}</p>
                </details>
            ))}
        </div>
    </>
);

export default EducationPage;