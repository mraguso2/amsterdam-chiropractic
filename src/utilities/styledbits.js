import styled from 'styled-components';
import { above, below } from './breakpoints';

export const SectionStyled = styled.article`
  padding: 0.5rem 1rem 1rem;
  background: ${props => props.background || '#ffffff'};
  ${above.sm`
    padding: 0.75rem 2rem 1.5rem;
  `}
`;

export const SectionTitleStyled = styled.h2`
  font-family: 'Laro', serif;
  font-size: 1.3rem;
  margin: auto auto 1.25rem;
  max-width: 960px;
  position: relative;
  ::after {
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -1.5px;
    height: 2px;
    width: ${props => props.widthSM || ''};
    background: ${props => props.colorLine || 'hsl(209,61%,16%)'};
    transform: rotate(-3deg);
    content: '';
  }
  ${above.sm`
    font-size: 1.7rem;
    &::after {
      width: ${props => props.width || ''};
    }
  `}
`;
