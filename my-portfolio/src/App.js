import './App.css';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import MainPages from './pages/structure-page/main-pages';

import StartPage from './pages/1-start-page/start-page';
import AboutPage from './pages/2-about-page/about-page';
import EducationPage from './pages/3-education-page/education-page';
import schoolsList from './pages/3-education-page/schools-list';

import SkillPage from './pages/4-skills-page/skill-page';

import ProjectPage from './pages/project-page/project-page';
import ContactMe from './pages/contact-page/contact-me';
import WorksPage from './pages/works-page/works-page';

import projectData from './pages/project-page/project-data'
import WorkExperienceDetailPage from './pages/works-page/work-experience-detail-page';

import { ThemeProvider } from './ThemeContext';
import HomePage from './pages/structure-page/home-page';

function App() {
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
              </Route>
            </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
