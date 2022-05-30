import HeroComponent from "../HeroComponent/HeroComponent";
import InventoryComponent from "../InventoryComponent/InventoryComponent";
import ServiceComponent from "../ServiceComponent/ServiceComponent";

const HomePageComponent = () => {
  return (
    <div>
      <HeroComponent />
      <ServiceComponent />
      <InventoryComponent />
    </div>
  );
};

export default HomePageComponent;
