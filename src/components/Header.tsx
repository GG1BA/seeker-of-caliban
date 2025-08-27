import "../css/header_style.css";

function Header() {
  return (
    <div className="header-inner">
      <a href="#">
        <img src="/da-logo.png" alt="header-logo" className="header-logo" />
      </a>
      <nav className="nav">
        <ul className="menu-list">
          <a href="#legion">
            <li className="menu-item">Legion</li>
          </a>
          <a href="#structure">
            <li className="menu-item">Structure</li>
          </a>
          <a href="#characters">
            <li className="menu-item">Characters</li>
          </a>
          <a href="#campaigns">
            <li className="menu-item">Campaigns</li>
          </a>
          {/* <a href="#">
            <li className="menu-item">Author</li>
          </a>
          <a href="#">
            <li className="menu-item">Feedback</li>
          </a> */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
