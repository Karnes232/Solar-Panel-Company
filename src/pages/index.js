import * as React from "react";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import SolarArrayCalculator from "../components/SolarArrayCalculator/SolarArrayCalculator";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <HeroComponent
        videoUrl={data.allContentfulPageLayout.nodes[0].backgroundVideo.url}
        smallVideoUrl={
          data.allContentfulPageLayout.nodes[0].backgroundVideoSmall.url
        }
      />
      <SolarArrayCalculator />
      <div className="h-[100rem]"></div>
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
