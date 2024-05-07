import React from "react";
import { Navbar } from "../components/navbar";
import "./menudocument.css";
import { Link } from "react-router-dom";

export function MenuDocument() {
  return (
    <>
      <Navbar />
      <div className="allcontent">
        <div className="row">
          <Link to="/coursesyllabus">
            <div className="column top-left"></div>
          </Link>
          <Link to="/coursebook">
            <div className="column top-right"></div>
          </Link>
        </div>

        <div className="row">
          <Link to="/calendar">
            <div className="column bot-left"></div>
          </Link>
          <Link to="/contact">
            <div className="column bot-right"></div>
          </Link>
        </div>
      </div>
    </>
  );
}
