import React from "react";
import "./allpee.css";
import { Navbar } from "../components/navbar";
import { Subject } from "../components/subject";
import moderr from "../assets/moderror.png";

export function PeeThree() {
  return (
    <>
      <Navbar />
      <div className="syllabus-center">
        <div className="syllabus-response">
          <div className="syllabus-header">
            <h1>วิชาเรียน ปี 3</h1>
            <hr />
          </div>
          <div className="syllabus-content">
            <div className="mod-error flex-row center">
              <p className="err-text">ยังไม่มีข้อมูลในขณะนี้</p>
              <img src={moderr} alt="error" className="moderr" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
