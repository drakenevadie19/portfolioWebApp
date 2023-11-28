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
                <span>My name is William, I am from Hai Phong, Vietnam, currently in Fort Worth, Texas. 
                    I'm a beginner full stack web developer, currently I have some experience with HTML&Bootstrap, CSS&LESS, JavaScript&TypeScript NodeJS. 
                    Now I practice in the development of web applications, and some frameworks like Angular, React, etc. 
                    I want to learn more and utilize my skills in the field of Information Technology and to help solve real world challenges.. </span>
                <ResumeButton />
            </div>
        </div>
    
);

export default HomePage;