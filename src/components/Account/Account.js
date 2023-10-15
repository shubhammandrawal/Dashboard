import React from "react";
import { FaHandSparkles } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { MdSpeakerNotes } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { GiDiscGolfBag } from "react-icons/gi";
import "./account.css";
import Chart from "../Chart/Chart";
import Products from "../Products/Products";

export default function Account() {
  return (
    <div className="mid-container">
      <div className="search-section">
        <p>
          Hello Shahrukh <FaHandSparkles />
        </p>
        <div class="search-container">
          <form>
            <button>
              <BsSearch />
            </button>
            <input type="text" placeholder="Search.." name="search" />
          </form>
        </div>
      </div>
      <div className="boxes">
        <div className="box">
          <div className="icon">
            <FaSackDollar />
          </div>
          <div className="text">
            <span className="earning">Earning</span>
            <span className="dollar">$198k</span>
            <div className="last-textsection">
              <span className="green">37.8%</span>
              <span>this month</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <MdSpeakerNotes />
          </div>
          <div className="text">
            <span className="earning">products</span>
            <span className="dollar">$2.4k</span>
            <div className="last-textsection">
              <span className="green">2%</span>
              <span>this month</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <GrMoney />
          </div>
          <div className="text">
            <span className="earning">Balance</span>
            <span className="dollar">$2.4k</span>
            <div className="last-textsection">
              <span className="green">2%</span>
              <span>this month</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <GiDiscGolfBag />
          </div>
          <div className="text">
            <span className="earning">Total sales</span>
            <span className="dollar">$89k</span>
            <div className="last-textsection">
              <span className="green">11%</span>
              <span>this week</span>
            </div>
          </div>
        </div>
      </div>
      <Chart />
      <Products />
    </div>
  );
}
