import "./navbar.css";
import { BrowserRouter, Link } from "react-router-dom";

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
  return (
    <>
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
        </ul>
      </nav>
    </>
  );
}
