import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const data=[
  {start: "09 : 24 AM", end: "11 : 27 PM"},
  {start: "10 : 30 AM", end: "02 : 10 PM"},
  {start: "11 : 30 AM", end: "02 : 30 PM"},
  {start: "02 : 30 AM", end: "05 : 30 PM"},
  {start: "03 : 47 AM", end: "06 : 30 PM"},
]
const Thursday = () => {
    return(
        <>
      {data.map(d => (
        <div className="col-md-4 col-sm-6 col-xs-12 mx-auto weekcol">
        <div className="time">
          {d.start}{" "}
          <FontAwesomeIcon className="arrow" icon={faLongArrowAltRight} /> {d.end}
        </div>
        <div className="dropbar">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dropup-content">
            <a className="options" href="#">Edit</a>
            <a className="options" href="#">Delete</a>
          </div>
        </div>
      </div>
      ))}
    </>
    )
}

export default Thursday;