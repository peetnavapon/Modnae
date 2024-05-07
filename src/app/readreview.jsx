import React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "../components/navbar";
import { Sidenav } from "../components/sidebar";
import ReviewCard from "../components/readReviewCard";
export function ReadReview() {
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
  };
  return (
    <>
      <Navbar />
      <div className="readreview-container">
        <Sidenav onSelectSubject={handleSelectSubject} />

        <div className="readreview-wrapper">
          <div className="header-container">
            <p>
              <b>คุณกำลังอ่านรีวิวในวิชา </b>
              <span>
                <b className="subject-name">
                  {selectedSubject !== "" ? selectedSubject : "ทั้งหมด"}
                </b>
              </span>
            </p>
          </div>
          <ReviewCard />
        </div>
      </div>
    </>
  );
}
