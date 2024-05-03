import React, { FormEvent} from "react";
import { regex } from "../../assets/variables";
import InputForm from "../../components/InputForm/InputForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { clearItems } from "../../redux/slices/cartSlice";
import style from "./OrderPage.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInfoTooltip } from "../../redux/slices/infoTooltipSlice";
import type { RootState } from "../../redux/srore";
import { useAppDispatch } from "../../redux/srore";

const OrderPage: React.FC = () => {
  const orderCart = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useAppDispatch();
  const { resetForm } = useFormAndValidation({});
  const navigate = useNavigate();

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    const dataClient = e as FormEvent & {
      target: {value:string}[]
    }

    orderCart.items.map((item) =>
      console.log(
        `Название: ${item.title}; цена: ${item.price}; Количество: ${item.count}; Размер: ${item.size}см; Тип теста: ${item.type};`
      )
    );

    console.log(
      `Цена заказа: ${orderCart.totalPrice} Количество товара: ${orderCart.totalCount} `
    );
    console.log(
      `Имя: ${dataClient.target[0].value}; Адрес: ${dataClient.target[1].value}; Телефон: ${dataClient.target[2].value}; email: ${dataClient.target[3].value}`
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
