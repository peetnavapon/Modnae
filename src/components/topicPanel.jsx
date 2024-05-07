import React from "react";
import { useState } from "react";
import "../app/topic.css";
function toggleTopic() {
  const topicBtn = document.getElementById("topic");
  const hideBtn = document.getElementById("hideBtn");
  if (topicBtn.style.display === "none") {
    topicBtn.style.display = "block";
    hideBtn.style.display = "none";
  } else {
    topicBtn.style.display = "none";
    hideBtn.style.display = "block";
  }
}
export function TopicPanel() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className=" flex center mb-1">
        <button id="hideBtn" className="topic-post-btn" onClick={toggleTopic}>
          + ตั้งกระทู้
        </button>
      </div>

      <div className="topic-panel mb-1" id="topic" style={{ display: " none " }}>
        <div className=" topic-content px-2-py-2">
          <form>
            <div className=" mb-1">
              <label>ระบุคำถามของคุณ</label>
              <input
                type="text"
                placeholder="โปรดระบุคำถาม"
                maxLength="120"
                id="question"
                className="question-input"
                onChange={(e) => setCount(e.target.value.length)}
              />
              <p id="character-count" className="text-sm">
                จำกัด 120 ตัวอักษร ({count}/120)
              </p>
            </div>
            <div>
              <label>รายละเอียดคำถาม</label>
              <textarea
                type="text"
                placeholder="รายละเอียดคำถามของคุณ"
                className="textarea-field"
              />
            </div>
            <div className="flex center">
              <button className="send-btn">ส่ง</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
