const SchoolImage = () =>  (
    // <div className="education-image">
    //     <img id="bio" src={srcName} alt="MyImageatSchools"></img>
    // </div>
    <>
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="/tcu.jpg" class="d-block w-100" alt="..." id="presentative-image" />
            </div>
            <div class="carousel-item">
                <img src="tpc.jpg" class="d-block w-100" alt="..." id="presentative-image" />
            </div>
            <div class="carousel-item">
                <img src="tpc2.jpg" class="d-block w-100" alt="..." id="presentative-image" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </>
)

export default SchoolImage;