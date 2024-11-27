
import StartPage from "../1-start-page/start-page";
import "../1-start-page/start-page.css";
import AboutPage from "../2-about-page/about-page";
import "../2-about-page/about-page.css"

import EducationPage from "../3-education-page/education-page";
import schoolsList from "../3-education-page/schools-list";
import "../3-education-page/education-page.css"

import SkillPage from "../4-skills-page/skill-page";
import "../4-skills-page/skill-page.css";

import WorksPage from "../5-works-page/works-page";
import "../5-works-page/works-page.css";

const HomePage = () => {

    return (
        <>
            <StartPage />
            <AboutPage />
            <EducationPage educationList={schoolsList} />
            <SkillPage />
            <WorksPage />
        </>
    )
}

export default HomePage;