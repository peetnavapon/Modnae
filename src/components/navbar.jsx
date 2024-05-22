import "./navbar.css";
import { BrowserRouter, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import mod from "../assets/mod.png";
import { useSelector } from "react-redux";
const getUser = (state) => state.user;

function hamMenu() {
  const ham = document.querySelector(".navbar-toggle");
  const menu = document.querySelector(".navbar-nav");
  if (ham.classList.contains("active")) {
    menu.style.display = "none";
    ham.classList.remove("active");
  } else {
    menu.style.display = "flex";
    ham.classList.add("active");
  }
}

// เพิ่มฟังก์ชั่นเพิ่มเติมเพื่อปิดเมนูเมื่อหน้าจอขยาย
function closeMenuOnResize() {
  const menu = document.querySelector(".navbar-nav");
  const ham = document.querySelector(".navbar-toggle");
  if (window.innerWidth > 480) {
    menu.style.display = "flex";
    ham.classList.add("active");
  } else {
    menu.style.display = "none";
    ham.classList.remove("active");
  }
}

// เรียกใช้งานฟังก์ชั่นเพื่อตรวจสอบการขยายหน้าจอเมื่อโหลดหน้าเว็บ
window.addEventListener("load", closeMenuOnResize);

// เรียกใช้งานฟังก์ชั่นเพื่อตรวจสอบการขยายหน้าจอเมื่อปรับขนาดหน้าจอ
window.addEventListener("resize", closeMenuOnResize);

export function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/login");
  };

  return (
    <>
      {user ? (
        <nav className="navbar">
          <div className="first">
            <a className="logo" href="/">
              Modnae
            </a>
            <div className="navbar-toggle" onClick={hamMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/writereview" className="nav-link">
                เขียนรีวิว
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/readreview" className="nav-link">
                อ่านรีวิว
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menudocument" className="nav-link">
                เอกสาร
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/topic" className="nav-link">
                กระทู้
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/account" className="nav-link">
                บัญชีของฉัน
              </Link>
            </li>
            <li className="nav-item " onClick={logout}>
              <Link className="nav-link">ออกจากระบบ</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="navbar">
          <div className="first">
            <a className="logo" href="/">
              Modnae
            </a>
            <div className="navbar-toggle" onClick={hamMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/writereview" className="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3-h-3 nav-icon"
                >
                  <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                </svg>
                เขียนรีวิว
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/readreview" className="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3-h-3 nav-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                อ่านรีวิว
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menudocument" className="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3-h-3 nav-icon"
                >
                  <path d="M8 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                  <path
                    fillRule="evenodd"
                    d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm5 5a3 3 0 1 0 1.524 5.585l1.196 1.195a.75.75 0 1 0 1.06-1.06l-1.195-1.196A3 3 0 0 0 9.5 7Z"
                    clipRule="evenodd"
                  />
                </svg>
                เอกสาร
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/topic" className="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3-h-3 nav-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 0 0 1.33 0l1.713-3.293a.783.783 0 0 1 .642-.413 41.102 41.102 0 0 0 3.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0 0 10 2ZM6.75 6a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                กระทู้
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                เข้าสู่ระบบ
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
