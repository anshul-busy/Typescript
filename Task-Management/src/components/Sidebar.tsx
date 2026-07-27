
import { Children, type ReactNode } from "react";
import "./styles/Style.css"
import { NavLink, Route, Routes } from "react-router-dom";

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
    Dashboard
  </NavLink>

  <NavLink to="/task" className="nav-item">
    Tasks


  </NavLink>

  {/* <NavLink to="/projects" className="nav-item">
    Projects
  </NavLink>
`
  <NavLink to="/projects" className="nav-item">
    Users
  </NavLink>

  <NavLink to="/projects" className="nav-item">
    Settings
  </NavLink> */}
</div>

  <div className="content">
   {children}
  </div>
</div> 
    </div> 
  )
}

export default Sidebar