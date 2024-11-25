import './App.css';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import MainPages from './pages/structure-page/main-pages';

import StartPage from './pages/1-start-page/start-page';
import AboutPage from './pages/2-about-page/about-page';
import EducationPage from './pages/education-page/education-page';
import ProjectPage from './pages/project-page/project-page';
import ContactMe from './pages/contact-page/contact-me';
import WorksPage from './pages/works-page/works-page';

import schoolsList from './pages/education-page/schools-list';
import projectData from './pages/project-page/project-data'
import SkillPage from './pages/skills-page/skill-page';
import WorkExperienceDetailPage from './pages/works-page/work-experience-detail-page';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<MainPages />}>
              <Route path="" element={<StartPage />} />
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
  );
}

export default App;
