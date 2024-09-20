import { useMyContext } from "../../UseContext";
import { useState } from "react";
import "./HomeProductss.scss";

export const Productss = () => {
  const { MenuMassiv, selectedCategory, addToCart } = useMyContext();
  const [visibleItemsCount, setVisibleItemsCount] = useState(6);

  console.log(addToCart);

  const filteredItems = MenuMassiv.filter((item) => {
    const categoryMatch =
      selectedCategory === "Все" || item.category === selectedCategory;
    return categoryMatch;
  }).slice(0, visibleItemsCount);

  return (
    <div className="Productss-Row">
      {filteredItems.map((element) => (
        <div className="Productss-Object" key={element.id}>
          <div className="Products-img">
            <img src={element.img} alt={element.name} />
          </div>
          <div className="Price">{element.price}</div>
          <div className="Name">{element.name}</div>
          <div className="Gram">{element.Gram}</div>
          <button className="Span-Button" onClick={() => addToCart(element)}>
            <span className="button">Добавить</span>
          </button>
        </div>
      ))}
    </div>
  );
};
