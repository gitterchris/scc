import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header as SemanticHeader } from 'semantic-ui-react';
import './header.css';

const Header = () => {
  const [activeItem, setActiveItem] = useState('home');
  const menuItems = [
    {
      to: '/', name: 'home', label: 'Home', isActive: activeItem === 'home',
    },
    {
      to: '/about', name: 'about', label: 'About', isActive: activeItem === 'about',
    },
    {
      to: '/projects', name: 'projects', label: 'Projects', isActive: activeItem === 'projects',
    },
    {
      to: '/pre-designed', name: 'pre-designed', label: 'Pre-Designed', isActive: activeItem === 'pre-designed',
    },
    {
      to: '/services', name: 'services', label: 'Services', isActive: activeItem === 'services',
    },
    {
      to: '/team', name: 'team', label: 'Team', isActive: activeItem === 'team',
    },
  ];

  return (
    <div className="app__header">
      <header
        className="app__header--menu middle"
      >
        <Menu
          text
        >
          <Menu.Item
            as={NavLink}
            to="/"
            name="header"
          >
            <SemanticHeader
              as="h1"
            >
              Suniga Construction Company
            </SemanticHeader>
          </Menu.Item>

          <Menu.Menu position="right">
            {menuItems.map(({
              to, name, label, isActive,
            }) => (
              <Menu.Item
                key={name}
                as={NavLink}
                to={to}
                name={name}
                active={isActive}
                onClick={(e, { name: itemName }) => setActiveItem(itemName)}
              >
                {label}
              </Menu.Item>
            ))}
            <Dropdown
              item
              className="app__header--more"
              text="More"
            >
              <Dropdown.Menu>
                <Dropdown.Item
                  as={NavLink}
                  to="/clients"
                >
                  Clients
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/certificates"
                >
                  Certificates
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </header>
    </div>
  );
};

export default Header;
