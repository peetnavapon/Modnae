import './navbar.css'
import { BrowserRouter, Link } from "react-router-dom";

function hamMenu(){
    const ham = document.querySelector(".navbar-toggle")
    const menu = document.querySelector(".navbar-nav")
    if (ham.classList.contains("active")) {
        menu.style.display = "none";
        ham.classList.remove("active");
    } else {
        menu.style.display = "flex";
        ham.classList.add("active");
    }
    
}

export function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className='first'>
                <a className='logo' href="/">Modnae</a>
                <div className="navbar-toggle" onClick={hamMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/writereview" className="nav-link">เขียนรีวิว</Link>
                </li>
                <li className="nav-item">
                    <Link to="/readreview" className="nav-link">อ่านรีวิว</Link>
                </li>
                <li className="nav-item">
                    <Link to="/menudocument" className="nav-link">เอกสารอื่นๆที่เกี่ยวข้อง</Link>
                </li>
            </ul>
        </nav>
    </>
  );
}