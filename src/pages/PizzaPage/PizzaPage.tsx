import React from "react";
import { useParams } from "react-router-dom";
import { fetchPizzaById } from "../../redux/slices/pizzaSlice";
import { useSelector } from "react-redux";
import "./PizzaPage.scss";
import { useAppDispatch } from "../../redux/srore";
import type { RootState } from "../../redux/srore";

function PizzaPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  if (id) {
    React.useEffect(() => {
      dispatch(fetchPizzaById(id));
    }, []);
  }

  const { item } = useSelector((state: RootState) => state.pizzaSlice);

  return (
    <section className=" container pizzaPage">
      <img
        src={item?.imageUrl}
        alt={item?.title}
        className="pizzaPage__image"
      />
      <div className="pizzaPage__info">
        <h2>{item?.title} </h2>
        <h3>Описание:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dolorem assumenda totam soluta nemo voluptatum magnam ipsum recusandae
          perspiciatis. Distinctio fugiat quia earum corporis nulla.
        </p>
        <p>
          Цена: <span>{item?.price} </span>руб
        </p>
      </div>
    </section>
  );
}

export default PizzaPage;
