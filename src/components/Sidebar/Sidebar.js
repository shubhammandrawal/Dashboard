import React from "react";
import { TbHelpSquareFilled, TbHexagonLetterO } from "react-icons/tb";
import {
  RiAccountPinBoxFill,
  RiBarChartBoxFill,
  RiMoneyDollarBoxFill,
} from "react-icons/ri";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { SiBoxysvg } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-wrapper">
          <div className="top">
            <div className="title">
              <TbHexagonLetterO />
              <h3>Dashboard</h3>
            </div>
            <ol className="list">
              <li>
                <RiBarChartBoxFill />
                Dashboard
                <div className="arrow">
                  <IoIosArrowForward />
                </div>
              </li>
              <li>
                <span>
                  <AiFillCodeSandboxSquare />
                  Product
                </span>{" "}
                <div className="arrow">
                  <IoIosArrowForward />
                </div>
              </li>
              <li>
                <span>
                  <RiAccountPinBoxFill />
                  Customers{" "}
                </span>{" "}
                <div className="arrow">
                  <IoIosArrowForward />
                </div>
              </li>
              <li>
                <span>
                  <RiMoneyDollarBoxFill />
                  Income{" "}
                </span>{" "}
                <div className="arrow">
                  <IoIosArrowForward />
                </div>
              </li>
              <li>
                <span>
                  <SiBoxysvg />
                  Promote
                </span>{" "}
                <div className="arrow">
                  <IoIosArrowForward />
                </div>
              </li>
              <li>
                <span>
                  <TbHelpSquareFilled />
                  Help
                </span>
                <div className="arrow">
                  <IoIosArrowForward />
                </div>
              </li>
            </ol>
          </div>
          <div className="bottom">
            <img src="image_01.jpeg" alt="img" />
            <div className="nameandposition">
            <h4>Evano</h4>
            <span>Project Manager</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
