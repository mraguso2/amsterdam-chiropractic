import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { above, below } from '../utilities/breakpoints';

const HeaderStyled = styled.header`
  background: #00533e;
  /* background: linear-gradient(0deg, #00533e, hsl(165, 68%, 26%)); */
  padding-top: 1rem;
  padding-bottom: 1rem;
  ${above.base`
    padding-bottom: 1rem;
  `}
  .topp1 {
    top: -0.5rem;
    right: -5.5rem;
    ${above.sm`
      right: -1.5rem;
    `}
    ${above.base`
      right: -3rem;
    `}
  }
  .topp2 {
    right: -7.5rem;
    top: 3rem;
    height: 2rem;
    opacity: 0;
    ${above.base`
      opacity: 1;
      height: 2.5rem;
      right: 0;
    `}
  }
  .bott {
    left: -5rem;
    bottom: -2.2rem;
    height: 2rem;
    z-index: 1;
    opacity: 1;
    ${above.base`
      height: 2.5rem;
      right: 0;
      opacity: 0;
    `}
  }
`;

const SVGStyled = styled.svg`
  width: 6rem;
  margin: 1rem;
  ${above.base`
    width: 7rem;
    margin: 1.25rem;
  `}
`;

const MassageStyled = styled.span`
  display: inline-block;
  ${above.sm`
    display: inline;
    padding-left: 0rem;
  `}
  ${above.base`
    display: inline;
    padding-left: 0rem;
  `}
`;

const HeaderText = styled.h1`
  font-family: 'Merriweather', serif;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.3;
  width: 250px;
  ${above.sm`
    width: 375px;
  `}
  ${above.base`
    font-size: 2.4rem;
    line-height: 1.4;
    width: 500px;
  `}
`;

const Headerbackground = styled.div`
  /* background-color: #00533e; */
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%2310b38a' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E"),
    linear-gradient(#00533e, #00533e);
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E"),
    linear-gradient(#00533e, #00533e);
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  right: -1rem;
  /* ${below.md`
    display: none;
  `} */
`;

const Header = () => (
  <HeaderStyled className=" flex items-center relative">
    <SVGStyled className="" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M0 0L250 0L0 250L0 0Z" fill="#10b38a" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M220 3L149.703 3V18.1811C158.486 16.0916 170.984 14.7857 184.852 14.7857C198.72 14.7857 211.218 16.0916 220 18.1812V3ZM149.703 82.4668V32.8188C158.486 34.9084 170.984 36.2143 184.852 36.2143C198.72 36.2143 211.218 34.9084 220 32.8188V82.4669C211.218 80.3773 198.72 79.0714 184.852 79.0714C170.984 79.0714 158.486 80.3773 149.703 82.4668ZM149.703 211.038V161.39C158.486 163.48 170.984 164.786 184.852 164.786C198.72 164.786 211.218 163.48 220 161.39V211.038C211.218 208.949 198.72 207.643 184.852 207.643C170.984 207.643 158.486 208.949 149.703 211.038ZM149.703 225.676V243H220V225.676C211.218 227.766 198.72 229.071 184.852 229.071C170.984 229.071 158.486 227.766 149.703 225.676Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M134.081 146.664V97.0161C142.864 99.1056 155.362 100.412 169.23 100.412C183.098 100.412 195.596 99.1056 204.378 97.0161V146.664C195.596 144.575 183.098 143.269 169.23 143.269C155.362 143.269 142.864 144.575 134.081 146.664Z"
          fill="white"
        />
        <rect x="23" y="105" width="55" height="5" rx="2.5" fill="#383838" />
        <rect x="13" y="135" width="65" height="5" rx="2.5" fill="#383838" />
        <rect x="46" y="120" width="32" height="5" rx="2.5" fill="#383838" />
        <path
          d="M82 153.244L97.5 123.215L82 93.1858V68L110.5 123.215L82 178.43V153.244Z"
          fill="#FFC726"
        />
      </g>
      <defs>
        <rect width="250" height="250" rx="5" fill="white" />
      </defs>
    </SVGStyled>
    <div>
      <HeaderText className="mb-0 tracking-wide">
        <Link className="text-white no-underline" to="/">
          Amsterdam <span className="pl-4">Chiropractic</span>{' '}
          <MassageStyled className="pl-8">& Massage</MassageStyled>
        </Link>
      </HeaderText>
    </div>
    {/* <div>
      <p>Menu</p>
    </div> */}
    <Headerbackground className="topp1 w-40 h-10 absolute" />
    <Headerbackground className="topp2 w-40 h-10 absolute" />
    <Headerbackground className="bott w-40 h-10 absolute" />
  </HeaderStyled>
);

// Header.propTypes = {
//   siteTitle: PropTypes.string
// };

// Header.defaultProps = {
//   siteTitle: ``
// };

export default Header;
