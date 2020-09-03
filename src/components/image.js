import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
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

const SpineHeroStyled = styled.div`
  /* background: radial-gradient(transparent, white);
  background: radial-gradient(circle, #ffc72714 5%, white); */
  /* background: radial-gradient(circle, #ffc72714, white 70%); */
  background: radial-gradient(rgba(255, 246, 221, 0.08), white 72%);
  padding-left: 1rem;
  padding-right: 1rem;
  ${above.sm`
      padding-left: 0.5rem;
      padding-right: 0.5rem;
  `}
  ${above.base`
      padding-left: 0;
      padding-right: 0;
  `}
  h3 {
    max-width: 550px;
    font-size: 1.3rem;
    text-align: center;
    font-family: 'Lora', serif;
    /* text-shadow: 1px 1px #c5edfb;
    text-shadow: 1px 1px #0041582e;
    color: #004159; */
    text-shadow: 1px 1px rgba(65, 73, 76, 0.42);
    color: #36342f;
    ${above.sm`
      font-size: 1.7rem;
    `}
    ${above.base`
      font-size: 2rem;
    `}
  }
`;

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "spine-bkg-pic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <div className="relative">
      <SpineHeroStyled className="flex flex-col justify-around items-center absolute w-full h-full z-10">
        <h3>We specialize in the treatment and diagnosis of neuromuscular disorders</h3>
        <h3>Our goal is to improve function, relieve and prevent pain</h3>
      </SpineHeroStyled>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  );
};

export default Image;
