import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Academy from './pages/Academy';
import Portfolio from './pages/Portfolio';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.scss';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <div className="routes">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/services' element={<Services />} />
            <Route path='/academy' element={<Academy />} />
            <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
        </div>

        {/* <FooterSection /> */}
      </BrowserRouter>
    </>
  )
}

export default App
