import React from "react";
import { useParams } from "react-router-dom";
import { fetchPizzaById } from "../../redux/slices/pizzaSlice";
import { useDispatch, useSelector } from "react-redux";
import "./PizzaPage.scss";
import {IPizza} from "../../types/Types"

fetchPizzaById;

function PizzaPage() {
  const dispatch = useDispatch();
  const params = useParams();

  React.useEffect(() => {
    dispatch(fetchPizzaById(params.id));
  }, []);

  const pizza: IPizza = useSelector((state) => state.pizzaSlice.item);

  return (
    <section className=" container pizzaPage">
      <img
        src={pizza.imageUrl}
        alt={pizza.title}
        className="pizzaPage__image"
      />
      <div className="pizzaPage__info">
        <h2>{pizza.title} </h2>
        <h3>Описание:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dolorem assumenda totam soluta nemo voluptatum magnam ipsum recusandae
          perspiciatis. Distinctio fugiat quia earum corporis nulla.
        </p>
        <p>
          Цена: <span>{pizza.price} </span>руб
        </p>
      </div>
    </section>
  );
}

export default PizzaPage;
