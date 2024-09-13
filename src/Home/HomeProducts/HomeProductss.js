import { useMyContext } from "../../UseContext";

import "./HomeProductss.scss";

export const Productss = () => {
  const { MenuMassiv } = useMyContext();
  return (
    <>
      <div className="Productss-Row">
        {MenuMassiv.map((element, index) => (
          <div className="Productss-Object" key={index}>
            <div className="Products-img">
              <img src={element.img} />
            </div>
            <div className="Price">{element.price}</div>
            <div className="Name">{element.name}</div>
            <div className="Gram">{element.Gram}</div>
            <button className="Span-Button">
              <span className="button">Добавить</span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
