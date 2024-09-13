import "./HomeBusket.scss";
import Delivery from "./delivery.svg";
import Burger from "../../asests/MeatBurger.png";
import Logo from "./cart 3.svg";

export const HomeBusket = () => {
  return (
    <>
      <div className="Home-Busket-Wrapper">
        <div className="Home-Busket-Title">
          <div className="Title">Корзина</div>
          <div className="Busket-elements">
            <div className="Busket-Logo">
              <img className="Busket" src={Logo} />
            </div>
            <div className="Busket-Count">1</div>
          </div>
        </div>
        <div className="Home-Busket-Product">
          <div className="Busket-Product-Desc">
            <div className="Busket-desc-photo">
              <img className="photo" src={Burger} />
            </div>
            <div className="Busket-Desc">
              <div className="Busket-Name">Супер сырный</div>
              <div className="Busket-Gram">180г</div>
              <div className="Busket-Price">550₽</div>
            </div>
          </div>
          <div className="Counter">
            <button className="Dec">-</button>
            <span className="Count">1</span>
            <button className="inc">+</button>
          </div>
        </div>
        <div className="Home-Busket-Product">
          <div className="Busket-Product-Desc">
            <div className="Busket-desc-photo">
              <img className="photo" src={Burger} />
            </div>
            <div className="Busket-Desc">
              <div className="Busket-Name">Супер сырный</div>
              <div className="Busket-Gram">180г</div>
              <div className="Busket-Price">550₽</div>
            </div>
          </div>
          <div className="Counter">
            <button className="Dec">-</button>
            <span className="Count">1</span>
            <button className="inc">+</button>
          </div>
        </div>
        <div className="Home-Busket-Total-Price">
          <div className="Busket-Total">Итого</div>
          <div className="Busket-Price">1234₽</div>
        </div>
        <button className="Busket-Button">
          <span className="Button">Оформить заказ</span>
        </button>
        <div className="Home-Busket-Delivery">
          <div className="Delivery-logo">
            <img className="Delivery" src={Delivery} />
          </div>
          <div className="Delivery-title">Бесплатная доставка</div>
        </div>
      </div>
    </>
  );
};
