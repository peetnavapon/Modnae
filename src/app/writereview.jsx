import React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "../components/navbar";
import { Sidenav } from "../components/sidebar";
import "./writereview.css";
import "../components/sendBtn.css";

export function WriteReview() {
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <>
      <Navbar />

      <div className="writereview-container">
        <Sidenav onSelectSubject={handleSelectSubject} />

        <div className="writereview-wrapper">
          <form>
            <div className="header-container">
              <p className="header-container-p">
                <b>คุณกำลังเขียนรีวิวในวิชา </b>
                <span>
                  <b className="subject-name">
                    {selectedSubject !== ""
                      ? selectedSubject
                      : "กรุณาเลือกวิชา"}
                  </b>
                </span>
              </p>
            </div>
            <div className="write-review-container">
              <p>
                <b>ปีการศึกษา </b>
                <span>
                  <input
                    className="subject-name"
                    placeholder="ระบุปีการศึกษา"
                  ></input>
                </span>
              </p>
              <p>
                <b>อาจารย์ผู้สอน </b>
                <span>
                  <select className="subject-name" defaultChecked="">
                    <option value="none" selected disabled hidden>
                      กรุณาระบุผู้สอน
                    </option>
                    <option>ผศ.ดร.วิบูลศักดิ์ วัฒายุ</option>
                    <option>ดร.ศุวิล ชมชัยยา</option>
                    <option>รศ.ชูเกียรติ วรสุชีพ</option>
                    <option>ดร.วรินทร์ วัฒนพรพรหม</option>
                    <option>ดร.ปริเวท วรรณโกวิท</option>
                    <option>ดร.วิธวินท์ สุสุทธิ</option>
                    <option>ดร.ฐิตาภรณ์ กนกรัตน</option>
                  </select>
                </span>
              </p>
              <p>
                <b>คำรีวิว</b>
              </p>
              <textarea
                placeholder="รีวิว"
                className="textarea-field"
              ></textarea>
              <br />
              <div className="flex center">
                <button className="send-btn flex">ยืนยัน</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
