import React, {useState} from 'react';
import {
  Navbar as NavbarBootstrap,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { nanoid } from 'nanoid';
import Button from './Button';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navItems = [
    {
      id: nanoid(),
      name: 'home',
      slug: '/',
    },
    {
      id: nanoid(),
      name: 'about',
      slug: '/about',
    },
    {
      id: nanoid(),
      name: 'services',
      slug: '/services',
    },
    {
      id: nanoid(),
      name: 'pages',
      slug: '/pages',
    },
    {
      id: nanoid(),
      name: 'blog',
      slug: '/blog',
    },
    {
      id: nanoid(),
      name: 'contact',
      slug: '/contact',
    },
  ];
  return (
    <NavbarBootstrap className="p-5" expand="md">
    <NavbarBrand className="text-white text-uppercase" href="/">
      zen
    </NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="ms-auto  d-flex align-items-center" navbar>
        {navItems.map(({ name, slug, id }) => (
          <NavItem key={id}>
            <NavLink className="text-uppercase px-3 text-white" href={slug}>{name}</NavLink>
          </NavItem>
        ))}
        <Button className="mx-md-2 mx-0">
          get a quote
        </Button>
      </Nav>
    </Collapse>
  </NavbarBootstrap>
  );
};

export default Navbar;