import { FaAngleDown } from "react-icons/fa";
import "./HeaderComponent.style.scss";

const HeaderComponent = () => {
  return (
    <div>
      <nav>
        <div className="nav-container row">
          <div className="logo">
            <h1>
              <span>Z</span>uma <span>X</span>press
            </h1>
          </div>
          <div className="nav">
            <ul className="main-nav">
              <li>
                <a href="/" className="active-home a-bottom">
                  home
                </a>
              </li> 
              <li className="drop-nav">
                <a href="categories" className="a-bottom">
                  categories
                </a>
                <FaAngleDown className="icon" />
                <div className="drop-down">
                  <ul className="drop-content">
                    <li className="drop-li">
                      <a href="">new cars</a>
                    </li>
                    <li className="dr#op-li">
                      <a href="#">tokunbo cars</a>
                    </li>
                    <li className="drop-li">
                      <a href="#">used cars</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="about" className="a-bottom">
                  About us
                </a>
              </li>
              <li>
                <a href="contact" className="a-bottom">
                  contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
