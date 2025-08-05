import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Dashboard.tsx'
import Login from './pages/Login.tsx';
import { RequireAuth } from './contexts/Auth/RequireAuth.tsx';

function App() {
    return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<RequireAuth><Home/></RequireAuth>} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  )
}

export default App
