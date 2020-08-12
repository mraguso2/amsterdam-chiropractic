import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import useWindowSize from '../hooks/useWindowSize';
import useOnClickOutside from '../hooks/useOnOutsideClick';
import { above, below } from '../utilities/breakpoints';

const NavStyled = styled.nav`
  background: #00533e;
`;

const showMe = css`
  display: flex;
`;

const closeStyle = css`
  background: hsl(165, 100%, 16%);
  margin-right: 0rem;
  border-radius: 0px;
  border: 3px solid #007558;
  border-bottom: none;
`;

const navContinerMobile = css`
  flex-direction: column;
  padding-right: 0;
  background: hsla(165, 100%, 23%, 1);
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const NavItemsStyled = styled.ul`
  background: #00533e;
  display: none;
  ${props => (props.showMe ? showMe : '')}
  ${props => (props.mobileMenu ? navContinerMobile : '')}
  ${above.base`
      display: flex;
  `}
`;

const MenuButtonStyled = styled.button`
  /* color: #00533e; */
  font-size: 0.9rem;
  ${props => (props.mobileMenu ? closeStyle : '')}
  ${above.sm`
      margin-right: 2rem;
      ${props => (props.mobileMenu ? closeStyle : '')}
  `}
`;

const NavItem = styled.li`
  margin-bottom: 0.25rem;
  ${above.base`
    margin-bottom: 0rem;
  `}
`;

const Navbar = () => {
  const size = useWindowSize();
  const ref = useRef();
  const [burgerButton, setBurgerButton] = useState(size.width < 625);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useOnClickOutside(ref, () => setMenuOpen(false));

  useEffect(() => {
    setBurgerButton(size.width < 625);
  }, [size]);

  return (
    <NavStyled ref={ref} className="flex justify-end relative flex-wrap">
      {burgerButton ? (
        <div className="flex-grow w-full text-right">
          <MenuButtonStyled
            type="button"
            mobileMenu={isMenuOpen && burgerButton}
            className="border border-teal-100 rounded p-1 mr-4 text-teal-100"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen && burgerButton ? 'X Close' : 'Menu'}
          </MenuButtonStyled>
        </div>
      ) : (
        ''
      )}
      <NavItemsStyled
        showMe={isMenuOpen}
        mobileMenu={isMenuOpen && burgerButton}
        className="flex pr-8"
      >
        <NavItem className="ml-3 mr-3 text-teal-100">
          <a className="font-medium" href="#meetthedoc" onClick={() => setMenuOpen(false)}>
            Meet The Doc
          </a>
        </NavItem>
        <NavItem className="ml-3 mr-3 text-teal-100">
          <a className="font-medium" href="#servicesoffered" onClick={() => setMenuOpen(false)}>
            Services Offered
          </a>
        </NavItem>
        <NavItem className="ml-3 mr-3 text-teal-100">
          <a className="font-medium" href="#contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </NavItem>
      </NavItemsStyled>
    </NavStyled>
  );
};

export default Navbar;
