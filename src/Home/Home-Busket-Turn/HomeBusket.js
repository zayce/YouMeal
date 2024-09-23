import "./HomeBusket.scss";
import Delivery from "./delivery.svg";
import Burger from "../../asests/MeatBurger.png";
import Logo from "./cart 3.svg";
import { useMyContext } from "../../UseContext";
import { useState } from "react";

export const HomeBusket = () => {
  const { cart, decFromCart, totalQuantity, addToCart, totalPrice } =
    useMyContext();

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="Home-Busket-Wrapper">
        <div className="Home-Busket-Title">
          <div className="Title">Корзина</div>
          <div className="Busket-elements">
            <div className="Busket-Logo">
              <img className="Busket" src={Logo} />
            </div>
            <div className="Busket-Count">{totalQuantity}</div>
          </div>
        </div>
        {cart.map((element) => (
          <div className="Home-Busket-Product">
            <div className="Busket-Product-Desc">
              <div className="Busket-desc-photo">
                <img className="photo" src={element.img} />
              </div>
              <div className="Busket-Desc">
                <div className="Busket-Name">{element.name}</div>
                <div className="Busket-Gram">{element.price}</div>
                <div className="Busket-Price">{totalPrice}₽</div>
              </div>
            </div>
            <div className="Counter">
              <button className="Dec" onClick={() => decFromCart(element.id)}>
                -
              </button>
              <span className="Count">{totalQuantity}</span>
              <button className="inc" onClick={() => addToCart(element)}>
                +
              </button>
            </div>
          </div>
        ))}
        <button className="Busket-Button" onClick={toggleModal}>
          <span className="Button">Оформить заказ</span>

          {modal && <Modal onClose={toggleModal} />}
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
