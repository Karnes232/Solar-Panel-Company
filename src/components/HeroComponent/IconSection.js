import React from "react";
import { MdBatteryCharging80 } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import IndividualIcon from "./IndividualIcon";
import { graphql, useStaticQuery } from "gatsby";
import { CiClock1 } from "react-icons/ci";
import { motion } from "framer-motion";
const IconSection = () => {
  const data = useStaticQuery(graphql`
    query IconQuery {
      allContentfulAsset(filter: { title: { eq: "24-7" } }) {
        nodes {
          url
          title
        }
      }
    }
  `);
  return (
    <div className="z-50 !absolute bottom-[5rem] lg:bottom-[8rem] xl:bottom-[10rem] 2xl:bottom-[12rem] w-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 3,
          delay: 0.3,
        }}
        className="flex w-2/3 justify-between lg:max-w-md 2xl:max-w-lg"
      >
        <IndividualIcon
          icon={<MdBatteryCharging80 />}
          title="Battery Energy Storage"
        />
        <IndividualIcon icon={<CiClock1 />} title="Outage Protection" />
        <IndividualIcon icon={<SlEnergy />} title="Energy Independence" />
      </motion.div>
    </div>
  );
};

export default IconSection;
