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
              <a href="" className="active">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Works</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Testimonial</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          
        </div>
        <div >
        <Button />
      </div>
      </div>
    );
  }
  
  export default Navbar;
  