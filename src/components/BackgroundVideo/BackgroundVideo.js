import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import useWindowWidth from "../../customHooks/useWindowWidth";

const BackgroundVideo = ({ videoUrl, smallVideoUrl }) => {
  const data = useStaticQuery(graphql`
    query ImageEffectQuery {
      allContentfulAsset(filter: { filename: { eq: "effect-shape-grey.png" } }) {
        edges {
          node {
            gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 1500)
            filename
          }
        }
      }
    }
  `);
  const imageEffect = getImage(
    data.allContentfulAsset.edges[0].node.gatsbyImage,
  );
  const windowWidth = useWindowWidth();

  let videoLink = "";
  if (windowWidth > 1180) {
    videoLink = videoUrl;
  } else {
    videoLink = smallVideoUrl;
  }
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        id="backgroundVideo"
        className="brightness-75 block w-full object-cover h-[20rem] md:h-[30rem] xl:h-[40rem] 2xl:h-[50rem]"
      >
        <source src={videoLink} type="video/mp4" />
      </video>
      <GatsbyImage
        image={imageEffect}
        alt=""
        className="z-50 !absolute -bottom-[1px] w-screen"
        loading="lazy"
      />
    </div>
  );
};

export default BackgroundVideo;
