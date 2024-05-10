import React from "react";
import "./readreview.css";

function ReviewCard({ subject, year, teacher, description, selectedSubject }) {
  return (
    <>
      <div className="readreview-wrapper">
        <div className="review-container">
          {selectedSubject == "" ? (
            <div>
              <p>
                <b>วิชา</b>
                <span>
                  <b className="subject-name">{subject}</b>
                </span>
              </p>
              <p>
                <b>ปีการศึกษา</b>
                <span>
                  <b className="subject-name">{year}</b>
                </span>
              </p>
              <p>
                <b>ผู้สอน</b>
                <span>
                  <b className="subject-name">{teacher}</b>
                </span>
              </p>
              <p className="review-text">{description}</p>
            </div>
          ) : (
            <div>
              <p>
                <b>ปีการศึกษา</b>
                <span>
                  <b className="subject-name">{year}</b>
                </span>
              </p>
              <p>
                <b>ผู้สอน</b>
                <span>
                  <b className="subject-name">{teacher}</b>
                </span>
              </p>
              <p className="review-text">{description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
