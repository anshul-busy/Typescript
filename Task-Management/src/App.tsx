

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Tasks from "./pages/Tasks";



function App() {
  
  return (
  <>


     <Routes>


      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
    
    </>
  )
}

export default App
