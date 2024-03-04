// import React from 'react'
import { regex } from "../../assets/variables";
import InputForm from "../../components/InputForm/InputForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { clearItems } from "../../redux/slices/cartSlice";
import style from "./OrderPage.module.scss";
import { useSelector, useDispatch } from "react-redux";



function OrderPage() {
  const orderCart = useSelector((state) => state.cartSlice);
	const dispatch = useDispatch()
  const { values, handleChange, errors, resetForm } = useFormAndValidation({
    name: "",
    adress: "",
    tel: "",
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    orderCart.items.map(item => console.log(`Название: ${item.title}; цена: ${item.price}; Количество: ${item.count}; Размер: ${item.size}см; Тип теста: ${item.type};`))

    console.log(`Цена заказа: ${orderCart.totalPrice} Количество товара: ${orderCart.totalCount} `);
    console.log(
      `Имя: ${values.name} ; Адрес: ${values.adress} ; Телефон: ${values.tel}`
    );
		dispatch(clearItems())
    resetForm();
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
          error={errors.name}
          value={values.name}
          handleChange={(e) => handleChange(e)}
          minLength={2}
          maxLength={25}
          pattern={regex.name}
        />
        <InputForm
          type={"text"}
          name={"adress"}
          title={"Введите адрес"}
          placeholder={"ул. Буйнакского дом 4, кв. 6"}
          value={values.adress}
          error={errors.adress}
          handleChange={(e) => handleChange(e)}
          minLength={6}
          maxLength={35}
          // pattern={regex.adress}
        />
        <InputForm
          type={"tel"}
          name={"tel"}
          title={"Введите номер телефона"}
          placeholder={"8 900 000 00 00"}
          value={values.tel}
          error={errors.tel}
          handleChange={(e) => handleChange(e)}
          minLength={2}
          maxLength={25}
          pattern={regex.tel}
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
}

export default OrderPage;
