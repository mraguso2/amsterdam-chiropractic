import React from 'react';
import styled from 'styled-components';

const SocialContainer = styled.div`
  background: #2e3748;
  color: white;
`;

const Social = () => (
  <>
    <SocialContainer className="flex justify-center text-center pt-3 pb-8">
      <a className="pl-2 pr-2" href="https://www.facebook.com/Amsterdamchiropracticoffice/">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          className="w-8"
        >
          <path
            style={{ fill: '#1976D2' }}
            d="M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h384c35.296,0,64-28.704,64-64V64
	C512,28.704,483.296,0,448,0z"
          />
          <path
            style={{ fill: '#FAFAFA' }}
            d="M432,256h-80v-64c0-17.664,14.336-16,32-16h32V96h-64l0,0c-53.024,0-96,42.976-96,96v64h-64v80h64
	v176h96V336h48L432,256z"
          />
        </svg>
      </a>
      <a className="pl-2 pr-2" href="https://www.instagram.com/jmeehan365/?hl=en">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          className="w-8"
        >
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="-46.0041"
            y1="634.1208"
            x2="-32.9334"
            y2="647.1917"
            gradientTransform="matrix(32 0 0 -32 1519 20757)"
          >
            <stop offset="0" style={{ stopColor: '#FFC107' }} />
            <stop offset="0.507" style={{ stopColor: '#F44336' }} />
            <stop offset="0.99" style={{ stopColor: '#9C27B0' }} />
          </linearGradient>
          <path
            style={{ fill: 'url(#SVGID_1_)' }}
            d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192
	c88.352,0,160-71.648,160-160V160C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112
	V160C48,98.24,98.24,48,160,48h192c61.76,0,112,50.24,112,112V352z"
          />
          <linearGradient
            id="SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1="-42.2971"
            y1="637.8279"
            x2="-36.6404"
            y2="643.4846"
            gradientTransform="matrix(32 0 0 -32 1519 20757)"
          >
            <stop offset="0" style={{ stopColor: '#FFC107' }} />
            <stop offset="0.507" style={{ stopColor: '#F44336' }} />
            <stop offset="0.99" style={{ stopColor: '#9C27B0' }} />
          </linearGradient>
          <path
            style={{ fill: 'url(#SVGID_2_)' }}
            d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128
	S326.688,128,256,128z M256,336c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80
	C336,300.096,300.096,336,256,336z"
          />
          <linearGradient
            id="SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="-35.5456"
            y1="644.5793"
            x2="-34.7919"
            y2="645.3331"
            gradientTransform="matrix(32 0 0 -32 1519 20757)"
          >
            <stop offset="0" style={{ stopColor: '#FFC107' }} />
            <stop offset="0.507" style={{ stopColor: '#F44336' }} />
            <stop offset="0.99" style={{ stopColor: '#9C27B0' }} />
          </linearGradient>
          <circle style={{ fill: 'url(#SVGID_3_)' }} cx="393.6" cy="118.4" r="17.056" />
        </svg>
      </a>
    </SocialContainer>
  </>
);

export default Social;
