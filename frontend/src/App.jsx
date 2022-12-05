// ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// TOASTS
import { ToastContainer } from 'react-toastify'

// COMPONENTES
import Header from './components/Header'
import Footer from './components/Footer'

// PAGES
import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/properties" element={<PropertiesPage />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
