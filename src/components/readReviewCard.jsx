import React from "react";
import { useState, useEffect } from "react";
import "../app/readreview.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ReviewCard({
  subject,
  year,
  teacher,
  description,
  selectedSubject,
  id,
  reviewId,
  initialLikes,
  userEmail,
}) {
  const [showMore, setShowMore] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [likedByUser, setLikedByUser] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/Readreview/like-status/${reviewId}?email=${userEmail}`
      )
      .then((response) => {
        setLikedByUser(response.data.likedByUser);
      })
      .catch((error) => console.error("Error fetching like status:", error));
  }, [reviewId, userEmail]);

  const handleLike = () => {
    axios
      .post(`http://localhost:5000/Readreview/like/${reviewId}`, {
        email: userEmail,
      })
      .then((response) => {
        setLikes(response.data.likes);
        setLikedByUser(!likedByUser); // Toggle the likedByUser state
      })
      .catch((error) => console.error("Error liking review:", error));
    if (!userEmail) {
      alert("please login");
      navigate("/login");
    }
  };

  return (
    <div className="readreview-wrapper">
      <div className="review-container">
        <p>
          <b>อาจารย์เองจ้า</b>
        </p>
        <p>Likes: {likes}</p>
        <button onClick={handleLike}>{likedByUser ? "Unlike" : "Like"}</button>
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
        {showMore ? (
          <p className="review-text">
            {description}
            <button className="showbtn" onClick={() => setShowMore(!showMore)}>
              {showMore ? "ดูน้อยลง" : "ดูเพิ่มเติม"}
            </button>
          </p>
        ) : description.length > 450 ? (
          <p className="review-text">
            {description.substring(0, 400)}
            <button className="showbtn" onClick={() => setShowMore(!showMore)}>
              {showMore ? "ดูน้อยลง" : "ดูเพิ่มเติม"}
            </button>
          </p>
        ) : (
          <p className="review-text">{description}</p>
        )}
      </div>
    </div>
  );
}

export default ReviewCard;
