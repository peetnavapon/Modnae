import React from "react";
import "../app/topic.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCommentAlt } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
function toggleComments() {
  const comments = document.getElementById("comment");
  if (comments.style.display === "none") {
    comments.style.display = "block";
  } else {
    comments.style.display = "none";
  }
}
export function CommentPanel() {
  const [topics, setTopics] = useState([]);
  // const [input, setInput] = useState({
  //   comment: "",
  // });
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    await axios
      .get("http://localhost:5000/ReadTopic")
      .then((response) => {
        console.log(response.data);
        setTopics(response.data);
        const reversedTopics = response.data.reverse();
        setTopics(reversedTopics);
      })
      .catch((error) => {
        console.error("Error fetching topic:", error);
      });
  };

  // function handleChange(evt) {
  //   const { name, value } = evt.target;
  //   setInput((prevInput) => {
  //     return {
  //       ...prevInput,
  //       [name]: value,
  //     };
  //   });
  // }

  // function handleClick(event) {
  //   const newPost = {
  //     comment: input.comment,
  //   };
  //   console.log(newPost);
  //   axios
  //     .post("http://localhost:5000/Topic", newPost)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  const thaiDateTimeOptions = {
    // year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    calendar: "buddhist",
    numberingSystem: "latn",
    month: "short",
    day: "numeric",
  };
  return (
    <>
      {topics.map((topic, index) => (
        <main className=" flex-col topic-content px-2-py-2 mb-05">
          <div key={index}>
            <div className="flex-row flex-between">
              <p className="mb-1">#{index + 1} มดสงสัย</p>
              <p className="mb-1 sm-text">
                {new Date(topic.createdAt).toLocaleDateString(
                  "th-TH",
                  thaiDateTimeOptions
                )}
              </p>
            </div>
            <div>
              <h3 className="topic-question">{topic.title}</h3>
              <p className="mb-1 ">{topic.descriptions}</p>
            </div>
            <button onClick={toggleComments} className="comment-btn">
              <FaCommentAlt className="comment-btn-icon" /> ความคิดเห็น
            </button>

            <div id="comment" className="comment" style={{ display: "none" }}>
              <hr />
              <div className="flex-row flex-between p-0 m-0">
                <p className="mt-1">ความคิดเห็นที่ 1</p>
                <p>1 นาทีที่แล้ว</p>
              </div>
              <p className="user-comment">คอมเม้นของคนที่1</p>
              <form>
                <label>แสดงความคิดเห็น</label>
                <div className="align-center mt-1 ">
                  <textarea
                    type="text"
                    placeholder="แสดงความคิดเห็น"
                    className="comment-field"
                    name="comment"
                  />
                  <button className="send-comment-btn">
                    <TbSend className="send-comment-btn-icon" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      ))}
    </>
  );
}
