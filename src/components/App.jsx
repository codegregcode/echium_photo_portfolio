import { Routes, Route } from 'react-router-dom';

import Welcome from './Welcome';
import Index from './Index';
import Footer from './Footer';

import Mar172024 from './journals/twenty24/Mar172024';
import Apr272024 from './journals/twenty24/Apr272024';

import '../styles/App.css';

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/index" element={<Index />} />
          <Route path="/index/a-test-a-start" element={<Mar172024 />} />
          <Route path="/index/porto" element={<Apr272024 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
