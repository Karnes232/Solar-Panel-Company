import React from "react";
import { StaticQuery, graphql } from "gatsby";

const BackgroundVideo = ({ videoUrl }) => {
  console.log(videoUrl);
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          allContentfulPageLayout(filter: { pageName: { eq: "Index" } }) {
            nodes {
              backgroundVideo {
                url
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <>
            <video autoPlay loop muted id="backgroundVideo">
              <source
                src={data.allContentfulPageLayout.nodes[0].backgroundVideo.url}
                type="video/mp4"
              />
            </video>
          </>
        );
      }}
    />
  );
};

export default BackgroundVideo;
