import React from "react";
import {
  Sidebar,
  // menuClasses,
  Menu,
  MenuItem,
  // SubMenu,
} from "react-pro-sidebar";
import { graphql, Link, useStaticQuery } from "gatsby";
// import SocialMedia from "../FooterComponents/SocialMedia";

const SideBarMenu = ({ toggled, setToggled }) => {
  const data = useStaticQuery(graphql`
    query SideBarQuery {
      allContentfulGeneralLayout {
        nodes {
          companyName
        }
      }
    }
  `);
  return (
    <>
      <Sidebar
        backgroundColor="rgb(255, 255, 255, .9)"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="mt-7 mb-10 flex justify-center text-center items-center font-lato tracking-wide text-2xl">
              {data.allContentfulGeneralLayout.nodes[0].companyName}
            </div>
            <Menu className="ml-4 overflow-hidden">
              <MenuItem component={<Link to="/" className="hamburger" />}>
                <p className="hamburger">Home</p>
              </MenuItem>
              <MenuItem component={<Link to="/about" className="hamburger" />}>
                <p className="hamburger">About Us</p>
              </MenuItem>
              <MenuItem
                component={<Link to="/gallery" className="hamburger" />}
              >
                <p className="hamburger">Gallery</p>
              </MenuItem>
              <MenuItem
                component={<Link to="/contact" className="hamburger" />}
              >
                <p className="hamburger">Contact</p>
              </MenuItem>
            </Menu>
          </div>
          <footer className="hamburger mx-4">
            {/* <SocialMedia
              classes="text-black mx-auto border-none"
              layoutData={layoutData}
            /> */}
          </footer>
        </div>
      </Sidebar>
    </>
  );
};

export default SideBarMenu;
