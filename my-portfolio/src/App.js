import './App.css';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import MainPages from './pages/structure-page/main-pages';

import StartPage from './pages/1-start-page/start-page';
import AboutPage from './pages/2-about-page/about-page';
import EducationPage from './pages/3-education-page/education-page';
import schoolsList from './pages/3-education-page/schools-list';

import SkillPage from './pages/4-skills-page/skill-page';

import WorksPage from './pages/5-works-page/works-page';
import WorkExperienceDetailPage from './pages/5-works-page/work-experience-detail-page';

import ProjectPage from './pages/6-project-page/project-page';
import projectData from './pages/6-project-page/project-data';

import ContactMe from './pages/7-contact-page/contact-me';

import CertificatePage from './pages/8-certificate-page/certificate-page';

import { ThemeProvider } from './ThemeContext';

import HomePage from './pages/structure-page/home-page';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    localStorage.removeItem('theme'); // Remove 'theme' when the app loads
    // console.log('Token removed on app reload');
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
            <Routes>
              <Route path='/' element={<MainPages />}>
                <Route path="" element={<HomePage />} />
                <Route path="/main/start" element={<StartPage />} />
                <Route path="/main/aboutme" element={<AboutPage />} />
                <Route path="/main/education" element={<EducationPage educationList={schoolsList} />} />
                <Route path="/main/skills" element={<SkillPage />} />
                <Route path="/main/works" element={<WorksPage />} />
                <Route path="/main/works/:id" element={<WorkExperienceDetailPage/> }/>
                <Route path="/main/projects" element={<ProjectPage projects={projectData} />} />
                <Route path="/main/contact" element={<ContactMe />} />
                <Route path='/main/certificate' element={<CertificatePage />} />
              </Route>
            </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
