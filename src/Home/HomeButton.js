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
import { useMyContext } from "../UseContext";

export const HomeButton = () => {
  const { filteresByCategori } = useMyContext();
  const massivButton = [
    { img: Burger, name: "Бургеры" },
    { img: zak, name: "Закуски" },
    { img: Hot, name: "Хот-доги" },
    { img: Combo, name: "Комбо-меню" },
    { img: Shaverma, name: "Шаурма" },
    { img: Pizza, name: "Пицца" },
    { img: Vok, name: "Вок" },
    { img: Desert, name: "Десерты" },
    { img: ket, name: "Соусы" },
  ];
  return (
    <>
      <div className="Buttons">
        {massivButton.map((button) => (
          <button
            key={button.name}
            className="Button"
            onClick={() => filteresByCategori(button.name)}
          >
            <div className="Button-img">
              <img className="img" src={button.img} alt={button.name} />
            </div>
            <div className="Button-Name">{button.name}</div>
          </button>
        ))}
      </div>
    </>
  );
};
