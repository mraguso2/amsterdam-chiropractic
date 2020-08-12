import React from 'react';
import styled from 'styled-components';
import { above, below } from '../utilities/breakpoints';
import ImageDoc from './imageDoc';
import { SectionStyled, SectionTitleStyled } from '../utilities/styledbits';

// const DocPicContainer = styled.div`
//   /* width: 150px; */
//   /* height: 150px; */
//   border-radius: 50%;
//   border: 2px solid black;
//   object-position: top;
//   ${above.base`
//       margin-top: 1rem;
//       min-width: 150px;
//   `}
// `;

const AboutTextStyled = styled.div`
  max-width: 550px;
  margin: 1rem auto;
  font-size: 0.9rem;
  p {
    margin-bottom: 1rem;
  }
  ${above.sm`
      font-size: 1rem;
  `}
  ${above.md`
      margin-top: 0px;
  `}
`;

const DrJMeehanText = styled.span`
  font-weight: 600;
  font-size: 1.3rem;
  font-family: 'Lora', serif;
  color: #00533e;
`;

const DocGrouping = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: auto;
  ${above.md`
      flex-direction: row;
      justify-content: space-between;
  `}
`;

const Meetthedoc = () => (
  <>
    <svg
      style={{ width: '100%', fill: 'rgb(255, 246, 221)', transform: 'rotate(180deg)' }}
      // viewBox="0 0 510 80"
      viewBox="0 20 510 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path d="M0 22L510 22V80L0 22Z" fill="#ffc726" />
        <path d="M0 22L510 22V67L0 22Z" fill="#ffdb78" />
        {/* #ecc94b
            #d69e2e
        */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M510 0H0V22L510 55V22V0Z"
          fill="rgb(255, 246, 221)"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="510" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
    <SectionStyled background="#fff6dd" id="meetthedoc">
      <SectionTitleStyled width="10rem" widthSM="7.5rem" colorLine="hsl(44, 100%, 58%)">
        Meet The Doc
      </SectionTitleStyled>
      <DocGrouping>
        <ImageDoc />
        <AboutTextStyled>
          <p>
            <DrJMeehanText>Doctor Jim Meehan</DrJMeehanText> grew up in Cazenovia, NY, and graduated
            from SUNY Brockport with his B.S. in Physical Education. He then went on to receive his
            Doctor of Chiropractic degree at Life University alongside his wife, Barbara. Not long
            after graduation the two opened up their chiropractic practice in Amsterdam, NY.
          </p>
          <p>
            Dr. Meehan is not only a chiropractor, but is also a certified yoga instructor and
            licensed massage therapist specializing in Thai Massage. His in-depth understanding and
            constant learning of the human body helps him provide the highest quality of care to his
            patients.
          </p>
          <p>
            In his free time, Dr. Meehan likes to visit his family, do yoga at the pool, and play
            croquet.
          </p>
        </AboutTextStyled>
      </DocGrouping>
    </SectionStyled>
  </>
);

export default Meetthedoc;
