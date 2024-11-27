
import StartPage from "../1-start-page/start-page";
import "../1-start-page/start-page.css";
import AboutPage from "../2-about-page/about-page";
import EducationPage from "../3-education-page/education-page";
import schoolsList from "../3-education-page/schools-list";
import SkillPage from "../4-skills-page/skill-page";

const HomePage = () => {

    return (
        <>
            <StartPage />
            <AboutPage />
            <EducationPage educationList={schoolsList} />
            <SkillPage />
        </>
    )
}

export default HomePage;