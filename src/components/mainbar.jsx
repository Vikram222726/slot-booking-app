import React from "react";
import {  Link, Route } from "react-router-dom";
import Monday from "./monday";
import Tuesday from "./tuesday";
import Wednesday from "./wednesday";
import Thursday from "./thursday";
import Friday from "./friday";
import Saturday from "./saturday";
import Sunday from "./sunday";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Weeks from './week';

const MainBar = () => {
  let [links, setLinks] = useState(["linked","link","link","link","link","link","link",]);
  let [btn, setBtn] = useState(0);
  let [toggle, setToggle] = useState(["btns", "openbtn"]);
  const checkWeek = (e) => {
    console.log(e.target.id);
    let newArr = [];
    for (let i = 0; i < links.length; i++) {
      if (i == e.target.id) { newArr[i] = "linked";} 
      else { newArr[i] = "link";}
    }
    setLinks(newArr);
  };

  const handleToggle = (e) => {
    let newArr = [];
    if (btn === 0) {
      setBtn(1); newArr = ["openbtn", "btns"];
    } else {
      setBtn(0); newArr = ["btns", "openbtn"];
    }
    setToggle(newArr);
  };
  return (
    <div className="main_content">
      <div className="container">
          <div className="row row1">
            <div className="col-md-10 col-xs-12 col-sm-10">
              <div className="header">
                <b>
                  Enter your time slots correctly so that you obtain
                  reservations according to your Availability.
                </b>
              </div>
            </div>
          </div>
          <div className="row row2">
            {Weeks.map((week,id) => (
              <div className="col col-xs-6">
              <div className="mon" onClick={checkWeek}>
                <Link className={links[week.ids]} id={week.ids} to={"/"+week.day} exact>
                  {week.day}
                </Link>
              </div>
            </div>
            ))}
            </div>
          <div className="row row5">
            <div className="col-11 col-xs-12 mx-auto">
              <div className="open-close">
                <div className="btn1">
                  <div className={toggle[0]}>Close</div>
                </div>
                <label className="switch">
                  <input onClick={handleToggle} type="checkbox" />
                  <span class="slider round"></span>
                </label>{" "}
                <div className="btn2">
                  <div className={toggle[1]}>Open</div>
                </div>
              </div>
              <div className="apply">
                Apply for all the day's{" "}
                <input type="checkbox" className="ckbx" id="slot" value="slot" />
              </div>
            </div>
          </div>
          <div className="row row3">
              <Route path="/Monday" exact component={Monday} />
              <Route path="/Tuesday" exact component={Tuesday} />
              <Route path="/Wednesday" exact component={Wednesday} />
              <Route path="/Thursday" exact component={Thursday} />
              <Route path="/Friday" exact component={Friday} />
              <Route path="/Saturday" exact component={Saturday} />
              <Route path="/Sunday" exact component={Sunday} />
          </div>
          <div className="row row4">
            <div className="col-12 mx-auto">
              <div className="addmore">
                <Link to="/find-slots" className="find-slot">
                  <FontAwesomeIcon icon={faPlusCircle} className="facircle" />{" "}
                  Add more slots
                </Link>
              </div>
              <div className="save">Save</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default MainBar;