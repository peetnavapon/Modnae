import React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "../components/navbar";
import { Sidenav } from "../components/sidebar";
import ReviewCard from "../components/readReviewCard";
import axios from "axios";

export function ReadReview() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [reviews, setReviews] = useState([]);
  console.log(selectedSubject)
  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
  };

  useEffect(() => {
    if (selectedSubject !== "") {
      axios.get(`http://localhost:5000/ReadReview?subject=${selectedSubject}`)
        .then((response) => {
          setReviews(response.data);
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
        });
    } else {
      axios.get(`http://localhost:5000/ReadReview`)
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
            <p>
              <b>คุณกำลังอ่านรีวิวในวิชา </b>
              <span>
                <b className="subject-name">
                  {selectedSubject !== "" ? selectedSubject : "ทั้งหมด"}
                </b>
              </span>
            </p>
          </div>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              year={review.year}
              teacher={review.teacher}
              description={review.descriptions}
            />
          ))}
        </div>
      </div>
    </>
  );
}
