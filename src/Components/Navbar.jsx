import Button from "./Button";
function Navbar() {
  function toggleMenu() {
    const menu = document.querySelector('.list');
    menu.classList.toggle('show');
  }

  return (
    <div className="main">
      <h1 className="heading"><span>M</span>Matias</h1>

      <div className="hamburger" onClick={toggleMenu}>☰</div>

      <div>
        <ul className="list"> 
          <li>
            <a href="#home" className="active">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div>
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
