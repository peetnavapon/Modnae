import React from "react";
import "../app/topic.css";
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
  return (
    <>
      <main className=" flex-col topic-content px-2-py-2 mb-05">
        <div>
          <div className="flex-row flex-between">
            <p className="mb-1">มดสงสัย</p>
            <p>1 นาทีที่แล้ว</p>
          </div>
          <div>
            <h3 className="topic-question">หัวข้อ</h3>
            <p className="mb-1">รายละเอียด</p>
          </div>
          <button onClick={toggleComments} className="comment-btn">
            <FaCommentAlt className="comment-btn-icon" /> ความคิดเห็น
          </button>
        </div>

        <div id="comment" className="comment" style={{ display: " none " }}>
          <hr />
          <div>
            <div className="flex-row flex-between p-0 m-0">
              <p className="mt-1">ความคิดเห็นที่ 1</p>
              <p>1 นาทีที่แล้ว</p>
            </div>
            <p className="user-comment">คอมเม้นของคนที่1</p>
          </div>
          <div>
            <form>
              <label>แสดงความคิดเห็น</label>
              <div className="align-center mt-1 ">
                <textarea
                  type="text"
                  placeholder="แสดงความคิดเห็น"
                  className="comment-field"
                />
                <button className="send-comment-btn">
                  <TbSend className="send-comment-btn-icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
