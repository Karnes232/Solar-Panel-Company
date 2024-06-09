import * as React from "react";
import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <BackgroundVideo
        videoUrl={data.allContentfulPageLayout.nodes[0].backgroundVideo.url}
        smallVideoUrl={data.allContentfulPageLayout.nodes[0].backgroundVideoSmall.url}
      />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allContentfulPageLayout(filter: { pageName: { eq: "Index" } }) {
      nodes {
        backgroundVideo {
          url
        }
        backgroundVideoSmall {
        url
      }
        pageName
      }
    }
  }
`;

export const Head = () => <title>Home Page</title>;
