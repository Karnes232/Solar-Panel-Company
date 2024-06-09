import { Link } from "gatsby";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const Logo = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allContentfulGeneralLayout {
        nodes {
          logo {
            gatsbyImage(placeholder: BLURRED, formats: WEBP, width: 300)
          }
        }
      }
    }
  `);

  const image = getImage(
    data.allContentfulGeneralLayout.nodes[0].logo.gatsbyImage,
  );
  return (
    <div className="flex justify-center items-center overflow-hidden">
      <Link to="/" className="no-underline" aria-label="Home">
        <div className="cursor-pointer flex items-center w-20 md:w-60">
          <GatsbyImage
            image={image}
            alt=""
            className="w-20 md:w-60"
            loading="lazy"
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
