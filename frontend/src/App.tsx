import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EmergencyPage from './pages/EmergencyPage';
import ScorePage from './pages/ScorePage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="emergency" element={<EmergencyPage />} />
          <Route path="score" element={<ScorePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;