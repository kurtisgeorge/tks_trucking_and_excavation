import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import TruckingServices from './pages/TruckingServices';
import ExcavationServices from './pages/ExcavationServices';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="trucking" element={<TruckingServices />} />
          <Route path="excavation" element={<ExcavationServices />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
