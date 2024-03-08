import './navbar.css'

export function Navbar() {
  return (
    <>
    <nav className="navbar">
        <a className='logo' href="">Modnae</a>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a href="#" className="nav-link">เขียนรีวิว</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">อ่านรีวิว</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">เอกสารอื่นๆที่เกี่ยวข้อง</a>
            </li>
        </ul>
    </nav>
    </>
  );
}