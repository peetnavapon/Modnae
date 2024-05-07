import React from "react";
import "./allpee.css";
import { Navbar } from "../components/navbar";
import { Subject } from "../components/subject";

export function PeeThree() {
  return (
    <>
      <Navbar />
      <div className="syllabus-center">
        <div className="syllabus-response">
          <div className="syllabus-header">
            <h1>วิชาเรียน ปี 3</h1>
            <hr />
          </div>
          <div className="syllabus-content">
            <div className="syllabus-subcontent">
              <div className="frame-subcontent">
                <h2>ภาคเรียนที่ 1</h2>
                <hr />
                <Subject
                  initialLink="https://drive.google.com/file/d/1Dw1Qial-F79k0E8SyU1nn7J5YNgPpTmX/view?usp=sharing"
                  initialText="CSS111 Exploring Computer Science"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/1Dw1Qial-F79k0E8SyU1nn7J5YNgPpTmX/view?usp=sharing"
                  initialText="CSS111 Exploring Computer Science"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/1Dw1Qial-F79k0E8SyU1nn7J5YNgPpTmX/view?usp=sharing"
                  initialText="CSS111 Exploring Computer Science"
                />
              </div>
            </div>

            <div className="syllabus-subcontent">
              <div className="frame-subcontent">
                <h2>ภาคเรียนที่ 2</h2>
                <hr />
                <Subject
                  initialLink="https://drive.google.com/file/d/1Dw1Qial-F79k0E8SyU1nn7J5YNgPpTmX/view?usp=sharing"
                  initialText="CSS111 Exploring Computer Science"
                />
                <Subject
                  initialLink="https://drive.google.com/file/d/1Dw1Qial-F79k0E8SyU1nn7J5YNgPpTmX/view?usp=sharing"
                  initialText="CSS111 Exploring Computer Science"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
