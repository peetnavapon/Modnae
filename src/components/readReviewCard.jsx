import React from "react";
import "./readreview.css";

function ReviewCard({year,teacher,description}) {
  return (
    <>
      <div className="readreview-wrapper">
        <div className="review-container">
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
          <p className="review-text">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
