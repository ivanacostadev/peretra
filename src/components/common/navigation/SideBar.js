import React, { useState } from 'react';
import "../styles/SideBar.css";
import closebar from "../../../assets/icons/cerrar.png";
import openbar from "../../../assets/icons/menu.png"; // Agrega el ícono de abrir

const Sidebar = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <nav id="sidebar">
          <div className="sidebar-header">
            <h2>PARETRA</h2>
            <a onClick={onClose}>
             
            </a>
          </div>
          <ul className="list-unstyled components">
            <li>
              <a href="#">Iniciar Sesi&oacute;n</a>
            </li>
            <li>
              <a href="#">Perfil</a>
            </li>
            <li>
              <a href="#">Herramientas</a>
            </li>
            
          </ul>
        </nav>
      )}
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <img src={isOpen ? closebar : openbar} alt='' className="toggle-icon closebar" />
      </div>
    </div>
  );
};

export default Sidebar;
