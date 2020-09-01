import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import Navbar from './nav';
import Meetthedoc from './meetthedoc';
import Services from './services';
import Contact from './contact';
import './layout.css';
import Social from './social';

const SVGstyled = styled.svg``;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div style={{ overflowX: `hidden` }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Navbar />
      <svg
        style={{ width: '100%', fill: '#00533e' }}
        // viewBox="0 0 510 80"
        viewBox="0 10 510 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path d="M0 22L510 22V80L0 22Z" fill="#10b38a" />
          <path d="M0 22L510 22V67L0 22Z" fill="#1e866c" />
          <path fillRule="evenodd" clipRule="evenodd" d="M510 0H0V22L510 55V22V0Z" fill="#00533e" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="510" height="80" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div>
        <main
          style={{
            margin: `0 auto`,
            maxWidth: 960
            // padding: `0 1.0875rem 1.45rem`
          }}
        >
          {children}
        </main>
        <Meetthedoc />
        <Services />
        <div style={{ background: 'linear-gradient(0deg, #40c09d, #18af88)' }}>
          <svg
            id=""
            preserveAspectRatio="xMidYMax meet"
            className="svg-separator sep4"
            viewBox="200 90 1200 110"
            data-height="200"
          >
            <polygon
              className=""
              style={{ fill: '#2d3748' }}
              points="886,86 800,172 714,86 -4,86 -4,204 1604,204 1604,86 "
            />
            <polygon
              className=""
              style={{ opacity: 1, fill: 'rgb(165, 227, 211)' }}
              points="800,172 886,86 900,86 800,186 700,86 714,86 "
            />
            <polygon
              className=""
              style={{ opacity: 1, fill: 'rgb(73, 197, 165)' }}
              points="800,162 876,86 888,86 800,174 712,86 724,86 "
            />
          </svg>
        </div>
        <Contact />
        <Social />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
