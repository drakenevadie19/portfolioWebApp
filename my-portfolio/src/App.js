import './App.css';

import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import Navbar from './nav-bar';
import HomePage from './pages/home-page';
import EducationPage from './pages/education-page';
import ProjectPage from './pages/project-page';
import ContactMe from './pages/contact-me';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div id="page-body">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
