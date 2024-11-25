import imageDB from "./images-db";

const SchoolImage = () =>  (
    // <div className="education-image">
    //     <img id="bio" src={srcName} alt="MyImageatSchools"></img>
    // </div>
    <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner">
                <>
                    {imageDB.map((image, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img key={index} src={image.src} className="d-block w-100" alt={image.alt} id="presentative-image" />
                        </div>
                    ))}
                </>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
)

export default SchoolImage;