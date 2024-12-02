import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; // Page d'accueil
import LoadingPage from './pages/LoadingPage/LoadingPage'; // Page de chargement
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/weather" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
