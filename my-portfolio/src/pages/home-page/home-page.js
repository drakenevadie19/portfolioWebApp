import ResumeButton from "./resume-button";

const HomePage = () => (
    
        <div className="main-home-page">
            <div className="images">
                <div class="blue-bg-outer">
                    <div class="white-bg">
                        <div class="blue-bg">
                            <img src="/Drake.jpg" alt="Bio" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="information">
                <h1>Hi, I'm Thanh Nguyen Do</h1>
                <div className="animated_text">
                    <h1 className="title">Front - end / Full - stack Developer</h1>
                </div>
                <p>I have skills relating to Website Building (HTML, CSS, JavaScript) as well as Java, Pythons, and C++. I keep upgrading my ability day by day and strengthening my problem-solving skills. </p>
                <ResumeButton />
            </div>
        </div>
    
);

export default HomePage;