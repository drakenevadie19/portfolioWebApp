import imageDB from "./images-db";

const SchoolImage = () =>  (
    // <div className="education-image">
    //     <img id="bio" src={srcName} alt="MyImageatSchools"></img>
    // </div>
    <>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div class="carousel-inner">
                <>
                    {imageDB.map((image, index) => (
                        <div class={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img key={index} src={image.src} class="d-block w-100" alt={image.alt} id="presentative-image" />
                        </div>
                    ))}
                </>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </>
)

export default SchoolImage;