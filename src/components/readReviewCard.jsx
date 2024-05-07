import React from "react";
import "./readreview.css";

function ReviewCard() {
  return (
    <>
      <div className="readreview-wrapper">
        <div className="review-container">
          <p>
            <b>ปีการศึกษา</b>
            <span>
              <b className="subject-name">xxx</b>
            </span>
          </p>
          <p>
            <b>ผู้สอน</b>
            <span>
              <b className="subject-name">xxx</b>
            </span>
          </p>
          <p className="review-text">
            เนื้อหาเนื้อหาเนื้อหาเนื้อหาเนื้อหาเนื้อหาเนื้อหาเนื้อหาเนื้อหาเนื้อหาเนื้อหาเนื้อหาเนื้อหาเนื้อหาเนื้อหา
          </p>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
