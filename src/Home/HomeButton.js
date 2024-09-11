import Burger from "./Button-img/cheeseBurger.svg";
import zak from "./Button-img/zakuski.svg";
import Hot from "./Button-img/Hot-dog.svg";
import Combo from "./Button-img/combo.svg";
import Shaverma from "./Button-img/shaurma.svg";
import Pizza from "./Button-img/pizza.svg";
import Vok from "./Button-img/Vok.svg";
import Desert from "./Button-img/desert.svg";
import ket from "./Button-img/ketchup.svg";

import "./HomeButton.scss";

export const HomeButton = () => {
  const massivButton = [
    { img: Burger, name: "Бургеры" },
    { img: zak, name: "Закуски " },
    { img: Hot, name: "Хот-доги" },
    { img: Combo, name: "Комбо" },
    { img: Shaverma, name: "Шаурма" },
    { img: Pizza, name: "Пицца" },
    { img: Vok, name: "Вок" },
    { img: Desert, name: "Десерты" },
    { img: ket, name: "Соусы" },
  ];
  return (
    <>
      <div className="Buttons">
        <div className="Button-Names">Все</div>
        {massivButton.map((button, index) => (
          <div key={index} className="Button">
            <div className="Button-img">
              <img className="img" src={button.img} />
            </div>
            <div className="Button-Name">{button.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};
