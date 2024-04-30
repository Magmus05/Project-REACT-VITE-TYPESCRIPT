import React from "react";
import { regex } from "../../assets/variables";
import InputForm from "../../components/InputForm/InputForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { clearItems } from "../../redux/slices/cartSlice";
import style from "./OrderPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInfoTooltip } from "../../redux/slices/infoTooltipSlice";

const OrderPage: React.FC = () => {
  const orderCart = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const { resetForm } = useFormAndValidation();
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    orderCart.items.map((item) =>
      console.log(
        `Название: ${item.title}; цена: ${item.price}; Количество: ${item.count}; Размер: ${item.size}см; Тип теста: ${item.type};`
      )
    );

    console.log(
      `Цена заказа: ${orderCart.totalPrice} Количество товара: ${orderCart.totalCount} `
    );
    console.log(
      `Имя: ${e.target[0].value}; Адрес: ${e.target[1].value}; Телефон: ${e.target[2].value}; email: ${e.target[3].value}`
    );
    dispatch(clearItems());
    resetForm();
    dispatch(
      setInfoTooltip({
        isOpen: true,
        title: `Заказ отправлен, ожидайте звонка менеджера`,
        name: "OK",
      })
    );

    navigate("/", { replace: true });
  };
  return (
    <section className={style.container}>
      <h1 className={style.title}>Оформление заказа</h1>
      <form onSubmit={handleSubmitForm} className={style.form}>
        <InputForm
          type={"text"}
          name={"name"}
          title={"Введите имя"}
          placeholder={"Магомед"}
          minLength={2}
          maxLength={25}
          pattern={regex.name}
        />
        <InputForm
          type={"text"}
          name={"adress"}
          title={"Введите адрес"}
          placeholder={"ул. Буйнакского дом 4, кв. 6"}
          minLength={6}
          maxLength={35}
          // pattern={regex.adress}
        />
        <InputForm
          type={"tel"}
          name={"tel"}
          title={"Введите номер телефона"}
          placeholder={"8 900 000 00 00"}
          minLength={11}
          maxLength={25}
          // pattern={regex.tel}
        />
        <InputForm
          type={"email"}
          name={"email"}
          title={"Введите адрес email"}
          placeholder={"2@yandex.ru"}
          minLength={2}
          maxLength={25}
          pattern={regex.email}
        />
        <button
          type="submit"
          name="buttonForm"
          disabled={true}
          className={style.button}
        >
          Отправить заказ
        </button>
      </form>
    </section>
  );
};

export default OrderPage;
