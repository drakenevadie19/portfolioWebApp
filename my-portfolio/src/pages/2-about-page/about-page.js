import ResumeButton from "./resume-button"; 
import "./about-page.css";

const AboutPage = () => {
    return (
        <>
            <div className="page-body-about" id="about-block">
                <div className="main-home-page-about">
                    <div className="images">
                        <div className="blue-bg-outer">
                            <div className="white-bg">
                                <div className="blue-bg">
                                    <img src="/bio-image/Drake1.jpeg" alt="Bio" />  
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="information">
                        <h1 className="information-name"><b>Hi, I'm Thanh Nguyen Do</b></h1>
                        <div className="animated_text">
                            <h1 className="title">Software Engineer</h1>
                        </div>
                        <p className="aboutme-description">I am currently in Fort Worth, Texas. I am a technology enthusiastic.
                            I am actively looking for a full-time position in United States.
                            I have a strong background with many experiences in Fullstack development utilizing technologies: <b className="tech-stack-animation"> Spring Boot, Kafka, Hibernate ORM, MERN & MEAN & MEVN Stacks, GraphQL, Apollo Client, Bootstrap 5, Material UI</b>. 
                            Now I keep sharpening my skills with Fullstack development, and broaden my horizon about distributed system. 
                        </p>
                        <p className="aboutme-description"><b className="tech-stack-animation"><i> My goal is to conquer Software Engineer career and keep exploring more about technologies. </i></b></p>

                        <div className="otherLink">
                            <a href="https://www.facebook.com/profile.php?id=100071543132965" target="_blank" rel="noreferrer">
                                <span className="links-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg> 
                                </span>
                                <b>Drake Do</b>
                            </a>

                            <a href="https://github.com/drakenevadie19" target="_blank" rel="noreferrer">
                                <span className="links-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                    </svg>
                                </span>
                                <b>drakenevadie19</b>
                            </a>

                            <a href="https://www.linkedin.com/in/drakedo" target="_blank" rel="noreferrer">
                                <span className="links-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                                    </svg>
                                </span>
                                <b>Drake Do</b>
                            </a>
                        </div>
                        
                        <ResumeButton />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage;