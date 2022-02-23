import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { FaReadme } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";

// navigation bar
export const Nav = styled.nav`
   background: #79C0AC;
   height: 85px;
   display: flex;
   justify-content: space-between;
   padding: 0.2rem calc((100vw - 1000px) / 2);
   z-index: 12;
`;

//NavLinked page titles
export const NavLink = styled(Link)`
   color: #2B625B;
   display: flex;
   align-items: center;
   font-size: 1.5rem;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
   &.active {
      color:#4d4dff;
   }
`;

//Home page icon
export const BarsIcon = styled(FaBars)`
   display: flex;
   color: #2B625B;
   @media screen and (max-width: 768px) {
      display: block;
      postition: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
   }
`;

//about page icon
export const ReadMeIcon = styled(FaReadme)`
   display: flex;
   color: #2B625B;
   @media screen and (max-width: 768px) {
      display: block;
      postition: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
   }
`;

//Search page icon
export const SearchIcon = styled(FaSearch)`
   display: flex;
   color: #2B625B;
   @media screen and (max-width: 768px) {
      display: block;
      postition: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
   }
`;

//tutorial page icon
export const ToolboxIcon = styled(FaToolbox)`
   display: flex;
   color: #2B625B;
   @media screen and (max-width: 768px) {
      display: block;
      postition: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
   }
`;

//sign in page icon
export const SignInIcon = styled(FaSignInAlt)`
   display: flex;
   color: #2B625B;
   @media screen and (max-width: 768px) {
      display: block;
      postition: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
   }
`;

//account page icon?
// export const UserIcon = styled(FaUserAlt)`
//    display: flex;
//    color: #2B625B;
//    @media screen and (max-width: 768px) {
//       display: block;
//       postition: absolute;
//       top: 0;
//       right: 0;
//       transform: translate(-100%, 75%);
//       font-size: 1.8rem;
//       cursor: pointer;
//    }
// `;

//Menu
export const NavMenu = styled.div`
   display: flex;
   align-items: center;
   //margin-right: -24px;
   /* Second Nav */
   /* margin-right: 24px; */
   /* Third Nav */
   /* width: 100vw; */
   /* white-space: 100vw; */
   @media screen and (max-width: 768px) {
      display: none;
   }
`;