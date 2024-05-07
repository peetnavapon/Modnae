import "./coursesyllabus.css";
import { Navbar } from "../components/navbar";
import { Link } from "react-router-dom";

export function CourseSyllabus() {
  return (
    <>
      <Navbar />
      <div className="allcontent">
        <div className="row">
          <Link to="/peeone">
            <div className="column-pee pee-one"></div>{" "}
          </Link>
          <Link to="/peetwo">
            <div className="column-pee pee-two"></div>{" "}
          </Link>
        </div>

        <div className="row">
          <Link to="/peethree">
            <div className="column-pee pee-three"></div>
          </Link>{" "}
          <Link to="/peefour">
            <div className="column-pee pee-four"></div>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
