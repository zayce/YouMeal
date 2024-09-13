import { HomeBusket } from "./Home-Busket-Turn/HomeBusket";
import "./HomeProducts.scss";
import { Productss } from "./HomeProducts/HomeProductss";

export const HomeProduct = () => {
  return (
    <>
      <div className="Home-Product-Blocks">
        <HomeBusket />
        <Productss />
      </div>
    </>
  );
};
