import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Welcome from './Welcome';
import Index from './Index';
import Footer from './Footer';

import Mar172024 from './journals/twenty24/Mar172024';
import Apr272024 from './journals/twenty24/Apr272024';
import May2024 from './journals/twenty24/May2024';
import Jun2024 from './journals/twenty24/Jun2024';

import '../styles/App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app-container">
      <ToastContainer />
      <div className="content">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/index" element={<Index />} />
          <Route path="/index/a-test-a-start" element={<Mar172024 />} />
          <Route path="/index/porto" element={<Apr272024 />} />
          <Route path="/index/testing-the-a1" element={<May2024 />} />
          <Route path="/index/starting-to-develop" element={<Jun2024 />} />
        </Routes>
      </div>
      {sessionStorage.getItem('show_landing_animation') === '1' &&
      sessionStorage.getItem('show_journal_animation') === '1' ? (
        <Footer />
      ) : null}
    </div>
  );
}

export default App;
