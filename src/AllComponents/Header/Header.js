import Solo from "./Header-Img/Solo.png";
import Burger from "./Header-Img/Burger.png";


import "./Header.scss";
export const Header = () => {
  return (
    <>
      <div className="Header-Wrapper">
        <div className="Header-Inner">
          <div className="Header-Logo-Solo">
            <img className="Solo" src={Solo} />
          </div>
          <div className="Header-Name">
            <div className="Header-Img">
              <img className="Img" src={Burger} />
            </div>
            <div className="Header-Texts">
              <div className="Header-Text">Только самые</div>
              <div className="Header-Text Text2">сочные бургеры!</div>
              <div className="Text">Бесплатная доставка от 599₽</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
