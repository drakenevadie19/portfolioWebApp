import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import MainPages from './pages/structure-page/main-pages';
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
              </Route>
            </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
