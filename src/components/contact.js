import React from 'react';
import styled from 'styled-components';
import { above } from '../utilities/breakpoints';
import { SectionStyled, SectionTitleStyled } from '../utilities/styledbits';

const ContactStyled = styled(SectionStyled)`
  background: #2e3748;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  ${above.sm`
    text-align: left;
  `}
`;

const ContactItemGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  svg {
    width: 18px;
  }
`;

const Email = styled(ContactItemGroup)`
  background: linear-gradient(90deg, #2e3748, #2a58ad, #2e3748);
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 2.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  svg {
    margin-right: 1.25rem;
  }
`;

const PhoneHome = styled.div`
  svg {
    margin-bottom: 0.75rem;
  }
`;

const Contact = () => (
  <ContactStyled id="contact">
    <div style={{ maxWidth: '550px' }}>
      <SectionTitleStyled className="text-center">Contact Us</SectionTitleStyled>
      <h5>Send us an email today to schedule an appointment. We look forward to seeing you!</h5>
      <address>
        <Email>
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path
              d="M.5 4.5l7 4 7-4m-13-3h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
              stroke="currentColor"
            />
          </svg>
          <a href="mailto:Jmeehan365@yahoo.com">Jmeehan365@yahoo.com</a>
        </Email>
        <PhoneHome className="flex justify-between items-center">
          <ContactItemGroup className="flex flex-col">
            {/* <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path
              d="M7.5.5l.325-.38a.5.5 0 00-.65 0L7.5.5zm-7 6l-.325-.38L0 6.27v.23h.5zm5 8v.5a.5.5 0 00.5-.5h-.5zm4 0H9a.5.5 0 00.5.5v-.5zm5-8h.5v-.23l-.175-.15-.325.38zM1.5 15h4v-1h-4v1zm13.325-8.88l-7-6-.65.76 7 6 .65-.76zm-7.65-6l-7 6 .65.76 7-6-.65-.76zM6 14.5v-3H5v3h1zm3-3v3h1v-3H9zm.5 3.5h4v-1h-4v1zm5.5-1.5v-7h-1v7h1zm-15-7v7h1v-7H0zM7.5 10A1.5 1.5 0 019 11.5h1A2.5 2.5 0 007.5 9v1zm0-1A2.5 2.5 0 005 11.5h1A1.5 1.5 0 017.5 10V9zm6 6a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zm-12-1a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 15v-1z"
              fill="currentColor"
            />
          </svg> */}
            <p className="text-left">
              365 Division St <br />
              Amsterdam, NY 12010
            </p>
          </ContactItemGroup>

          <ContactItemGroup className="flex flex-col">
            {/* <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path
              d="M4.72.5H2.5a2 2 0 00-2 2v2c0 5.523 4.477 10 10 10h2a2 2 0 002-2v-1.382a1 1 0 00-.553-.894l-2.416-1.208a1 1 0 00-1.396.578l-.297.893a1.21 1.21 0 01-1.385.804A6.047 6.047 0 013.71 6.547a1.21 1.21 0 01.804-1.385l1.108-.37a1 1 0 00.654-1.19L5.69 1.257A1 1 0 004.72.5z"
              stroke="currentColor"
            />
          </svg> */}
            <a href="tel:518-842-9737">(518) 842-9737</a>
          </ContactItemGroup>
        </PhoneHome>
      </address>
    </div>
  </ContactStyled>
);

export default Contact;
