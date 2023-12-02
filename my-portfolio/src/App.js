import './App.css';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import Navbar from './nav-bar';
import HomePage from './pages/home-page/home-page';
import EducationPage from './pages/education-page/education-page';
import ProjectPage from './pages/project-page/project-page';
import ContactMe from './pages/contact-page/contact-me';
import WorksPage from './pages/works-page/works-page';

import schoolsList from './pages/education-page/schools-list';
import projectData from './pages/project-page/project-data'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div id="page-body">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/education" element={<EducationPage educationList={schoolsList} />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/projects" element={<ProjectPage projects={projectData} />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
