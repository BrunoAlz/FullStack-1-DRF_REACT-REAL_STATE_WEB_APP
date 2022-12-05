// ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// TOASTS
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// COMPONENTES
import Header from './components/Header';
import Footer from './components/Footer';

// PAGES
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
          </Routes>
          <ToastContainer />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
