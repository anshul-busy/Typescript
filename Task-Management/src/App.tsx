

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from './pages/Dashboard';
import Task from './pages/Task';



function App() {
  
  return (
  <>
{/* <Sidebar heading="My App" /> */}

     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/task" element={<Task />} />
    </Routes>
    
    </>
  )
}

export default App
