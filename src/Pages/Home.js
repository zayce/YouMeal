import { HomeButton } from "../Home/HomeButton";
import { HomeProduct } from "../Home/HomeProducts";
import "./Home.scss";

export const Home = () => {
  return (
    <>
      <div className="Home-Wrapper">
        <div className="Home-Inner">
          <HomeButton />
          <HomeProduct />
        </div>
      </div>
    </>
  );
};
