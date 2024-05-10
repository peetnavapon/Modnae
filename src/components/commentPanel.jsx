import React from "react";
import "../app/topic.css";
import moderr from "../assets/moderror.png";
import modnoi from "../assets/mod.png";
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
  const [opened, setOpened] = useState({});
  const [comments, setComments] = useState([]);
  const toggleButton = (index) => {
    setOpened((prevOpened) => ({
      ...prevOpened,
      [index]: !prevOpened[index],
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/ReadTopic");
        const reversedTopics = response.data.reverse();
        // Assuming comments are nested within topics
        const topicsWithComments = reversedTopics.map((topic) => ({
          ...topic,
          comments: topic.comments || [], // Set empty array for comments if not present
          totalComments: topic.comments ? topic.comments.length : 0, // Calculate total comments
        }));
        setTopics(topicsWithComments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const thaiDateTimeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    calendar: "buddhist",
    numberingSystem: "latn",
    month: "short",
    day: "numeric",
  };
  const submitComment = async (topicId, commentContent) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/Topic/${topicId}/comment`,
        {
          content: commentContent,
        }
      );
      // Update state with the new comment
      setComments([...comments, response.data.comments[0]]); // Assuming response contains the new comment
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  return (
    <>
      {topics.length > 0 ? (
        <div>
          {topics.map((topic, index) => (
            <main
              key={index}
              className="flex-col topic-content px-2-py-2 mb-05"
            >
              <div>
                <div className="flex-row center flex-between mb-05">
                  <div className="flex-row center ">
                    <img src={modnoi} className="modProfile" />
                    <p className="ml-05">มดสงสัย</p>
                  </div>

                  <p className=" sm-text">
                    {new Date(topic.createdAt).toLocaleDateString(
                      "th-TH",
                      thaiDateTimeOptions
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="topic-question">{topic.title}</h3>
                  <p className="mb-1">{topic.descriptions}</p>
                </div>

                <button
                  onClick={() => toggleButton(index)}
                  className="comment-btn"
                >
                  <FaCommentAlt className="comment-btn-icon" />
                  {topic.totalComments} ความคิดเห็น
                </button>

                {opened[index] && (
                  <div key={index} className="comment">
                    <hr />
                    {topic.comments.map((comment, commentIndex) => (
                      <div key={comment._id}>
                        <div className="mb-1">
                          <div className="flex-row flex-between center p-0 m-0 mt-1">
                            <div className="flex-row center">
                              <img src={modnoi} className="modProfile" />
                              <div>
                                <p className="ml-05">
                                  ความคิดเห็นที่ {commentIndex + 1}
                                </p>
                              </div>
                            </div>
                            <p className="sm-text">
                              {new Date(comment.createdAt).toLocaleDateString(
                                "th-TH",
                                thaiDateTimeOptions
                              )}
                            </p>
                          </div>
                          <p className="ml-3">{comment.content}</p>
                        </div>
                      </div>
                    ))}

                    <form
                      onSubmit={(e) => {
                        const commentContent = e.target.comment.value;
                        submitComment(topic._id, commentContent);
                      }}
                    >
                      <div>
                        <div className="flex-row ">
                          <img src={modnoi} className="modProfile" />
                          <div>
                            <label className="ml-05">แสดงความคิดเห็น</label>
                          </div>
                        </div>
                        <div className="align-center mt-1 ml-3">
                          <textarea
                            type="text"
                            placeholder="แสดงความคิดเห็น"
                            className="comment-field"
                            name="comment"
                          />
                          <button type="submit" className="send-comment-btn">
                            <TbSend className="send-comment-btn-icon" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </main>
          ))}
        </div>
      ) : (
        <div className="mod-error flex-row center">
          <p className="err-text">ยังไม่มีกระทู้คำถาม</p>
          <img src={moderr} alt="error" className="moderr" />
        </div>
      )}
    </>
  );
}
