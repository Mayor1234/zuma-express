
// import lexus from "../images/lexuslogo.jpeg";
import benz from "../images/benzlogo.jpeg";
import toyota from "../images/toyotalogo.jpeg";
import honda from "../images/hondalogo.jpeg";
import data from "../data";
import "./InventoryComponent.style.scss";

const InventoryComponent = () => {
  return (
    <div>
      <div className="brand-heading">
        <h2>OUR BRANDS</h2>
        <p>We Autos Deals In</p>
        <span></span>
      </div>
      
      <div className="container">
        <div className="car">
          <img src={data.inventory.imageUrl} alt="lexus" />
        </div>

        <div className="car">
          <img src={toyota} alt="toyota" />
        </div>

        <div className="car">
          <img src={benz} alt="benz" />
        </div>

        <div className="car">
          <img src={honda} alt="honda" />
        </div>

      </div>
    </div>
  );
};

export default InventoryComponent;
