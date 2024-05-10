import React from "react";
import "./readreview.css";
import moderr from "../assets/moderror.png";
import { useState, useEffect } from "react";
import { Navbar } from "../components/navbar";
import { Sidenav } from "../components/sidebar";
import ReviewCard from "../components/readReviewCard";
import axios from "axios";

export function ReadReview() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
  };

  useEffect(() => {
    if (selectedSubject !== "") {
      axios
        .get(`http://localhost:5000/ReadReview?subject=${selectedSubject}`)
        .then((response) => {
          setReviews(response.data);
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
        });
    } else {
      axios
        .get(`http://localhost:5000/ReadReview`)
        .then((response) => {
          setReviews(response.data);
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
        });
    }
  }, [selectedSubject]);

  return (
    <>
      <Navbar />
      <div className="readreview-container">
        <Sidenav onSelectSubject={handleSelectSubject} />

        <div className="readreview-wrapper">
          <div className="header-container">
            <p className="header-container-p">
              <b>คุณกำลังอ่านรีวิวในวิชา </b>
              <span>
                <b className="subject-name">
                  {selectedSubject !== "" ? selectedSubject : "ทั้งหมด"}
                </b>
              </span>
            </p>
          </div>
          {reviews.length > 0 ? (
            <div>
              {reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  year={review.year}
                  teacher={review.teacher}
                  description={review.descriptions}
                />
              ))}
            </div>
          ) : (
            <div className="mod-error flex-row center">
              <p className="err-text">วิชานี้ยังไม่มีรีวิว</p>
              <img src={moderr} alt="error" className="moderr" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
