import "./ServiceComponent.style.scss";
import rentcar from "../images/rentcar.jpg";
import sellcar from "../images/sellcar.jpg";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ServiceComponent = () => {
  return (
    <div>
      <main>
        <div className="wrapper">
          <div className="card">
            <div className="car-service first">
              <img src={rentcar} alt="sellcar" />
              <div className="footer-item">
                <h3> sell your car</h3>
                <ButtonComponent text="Get an offer" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="car-service">
              <img src={sellcar} alt="buycar" />
              <div className="footer-item">
                <h3> buy a car</h3>
                <ButtonComponent text="Browse all" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceComponent;
