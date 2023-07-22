import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './Components/Common/NavBar/NavBar';
import Footer from './Components/Common/Footer/Footer.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';

import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import Centers from './Components/Centers/Centers.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/centers" element={<Centers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;