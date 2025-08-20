// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import AccountSettingsPage from './pages/AccountSettingsPage';

function App() {
  return (
    // This outer div creates the centered container for our mobile view
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-full max-w-sm h-[80vh] max-h-[900px] bg-white shadow-lg rounded-lg overflow-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/register" element={<CreateAccountPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<AccountSettingsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App