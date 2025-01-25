
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

import ProjectPage from "../6-project-page/project-page";
import projectData from "../6-project-page/data/project-data";
import "../6-project-page/project-page.css";

import ContactMe from "../7-contact-page/contact-me";
import "../7-contact-page/contact-page.css";

import CertificatePage from "../8-certificate-page/certificate-page";
import "../8-certificate-page/certificate-page.css";

const HomePage = () => {

    return (
        <>
            <StartPage />
            <AboutPage />
            <EducationPage educationList={schoolsList} />
            <WorksPage />
            <ProjectPage projects={projectData} />
            <SkillPage />
            <CertificatePage />
            <ContactMe />
        </>
    )
}

export default HomePage;