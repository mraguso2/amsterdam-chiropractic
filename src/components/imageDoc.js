import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import styled from 'styled-components';
import { above } from '../utilities/breakpoints';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const DocPicContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 120px;
  max-height: 120px;
  transform: scale(1.2);
  margin: 1.5rem auto;
  ${above.base`
    max-width: 150px;
    max-height: 150px;
  `}
  ${above.md`
    margin: auto auto;
    margin-top: 1.5rem;
    margin-left: 1rem;
  `}
`;

const ImageDoc = ({ style }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "meet-doc-pic2-1.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <DocPicContainer>
      <Img
        // style={{ ...style }}
        style={{
          borderRadius: '50%',
          border: '3px solid #00533e',
          boxShadow: '1px 1px 15px rgba(0, 83, 62, 0.3)'
        }}
        objectPosition="top"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </DocPicContainer>
  );
};

export default ImageDoc;
