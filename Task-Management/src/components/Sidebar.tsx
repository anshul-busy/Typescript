
import { Children, type ReactNode } from "react";
import "./styles/Style.css"
import { NavLink, Route, Routes } from "react-router-dom";
import DownloadCard from "./DownloadCard";

interface SidebarProps {
  heading: string;
  children?: ReactNode; 
}

const Sidebar = ({ heading ,children}: SidebarProps) => {

  return (
    <div>
     
<div className="layout">
  <div className="sidebar">
  <h2 className="logo">{heading}</h2>

    <NavLink to="/dashboard" className="nav-item">
      <span className="nav-icon">📊</span> Dashboard
    </NavLink>

    <NavLink to="/tasks" className="nav-item">
      <span className="nav-icon">📋</span> View Tasks
    </NavLink>

    <NavLink to="/employees" className="nav-item">
      <span className="nav-icon">👥</span> Employees

    </NavLink>

    <NavLink to="/users" className="nav-item">
      <span className="nav-icon">👤</span> Users
    
    </NavLink>

    <NavLink to="/settings" className="nav-item">
      <span className="nav-icon">⚙️</span> Settings
    </NavLink>
  
    <DownloadCard />
    
  <NavLink to="/" className="nav-item logout-item">
   <span className="nav-icon">⏻</span> Logout
  </NavLink>


</div>

  <div className="content">
   {children}
  </div>
</div> 
    </div> 
  )
}

export default Sidebar