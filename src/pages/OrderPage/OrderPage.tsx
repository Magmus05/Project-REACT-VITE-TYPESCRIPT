import React from "react";
import { regex } from "../../assets/variables";
import { clearItems } from "../../redux/slices/cartSlice";
import style from "./OrderPage.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInfoTooltip } from "../../redux/slices/infoTooltipSlice";
import type { RootState } from "../../redux/srore";
import { useAppDispatch } from "../../redux/srore";
import { useForm, SubmitHandler } from "react-hook-form";
import { IInputsForm } from "../../types/Types";
import { InputFormRHF } from "../../components/InputForm/InputFormRHF";

const OrderPage: React.FC = () => {
  const orderCart = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const handleSubmitForm = (e: FormEvent) => {
  //   e.preventDefault();
  //   const dataClient = e as FormEvent & {
  //     target: { value: string }[];
  //   };

  //   orderCart.items.map((item) =>
  //     console.log(
  //       `Название: ${item.title}; цена: ${item.price}; Количество: ${item.count}; Размер: ${item.size}см; Тип теста: ${item.type};`
  //     )
  //   );

  //   console.log(
  //     `Цена заказа: ${orderCart.totalPrice} Количество товара: ${orderCart.totalCount} `
  //   );
  //   console.log(
  //     `Имя: ${dataClient.target[0].value}; Адрес: ${dataClient.target[1].value}; Телефон: ${dataClient.target[2].value}; email: ${dataClient.target[3].value}`
  //   );
  //   dispatch(clearItems());
  //   resetForm();
  //   dispatch(
  //     setInfoTooltip({
  //       isOpen: true,
  //       title: `Заказ отправлен, ожидайте звонка менеджера`,
  //       name: "OK",
  //     })
  //   );

  //   navigate("/", { replace: true });
  // };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    getFieldState,
    //watch,
  } = useForm<IInputsForm>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IInputsForm> = (data) => {
    orderCart.items.map((item) =>
      console.log(
        `Название: ${item.title}; цена: ${item.price}; Количество: ${item.count}; Размер: ${item.size}см; Тип теста: ${item.type};`
      )
    );

    console.log(
      `Цена заказа: ${orderCart.totalPrice} Количество товара: ${orderCart.totalCount} `
    );
    console.log(
      `Имя: ${data.name}; Адрес: ${data.adress}; Телефон: ${data.tel
        .toString()
        .replace(/[\s-()+_]/g, "")}; email: ${data.email}`
    );
    dispatch(clearItems());
    reset();
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
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <InputFormRHF
          register={register}
          name={"name"}
          title={"Введите имя"}
          required={"Поле обязательное"}
          minLength={{ value: 2, message: "Имя должно быть больше 2 букв" }}
          pattern={{
            value: regex.name,
            message:
              "Имя должно содержать только латиницу, кириллицу, пробел или дефис",
          }}
          error={errors.name}
          placeholder={"Магомед"}
          isDirty={getFieldState("name").isDirty}
        />
        <InputFormRHF
          register={register}
          name={"adress"}
          title={"Введите адрес"}
          required={"Поле обязательное"}
          minLength={{ value: 6, message: "Адрес должен быть больше 6 букв" }}
          pattern={{
            value: regex.adress,
            message:
              "Адрес должен содержать только латиницу, кириллицу, точки, запятые, пробел или дефис",
          }}
          error={errors.adress}
          placeholder={"ул. Буйнакского дом 4, кв. 6"}
          isDirty={getFieldState("adress").isDirty}
        />
        <InputFormRHF
          register={register}
          name={"email"}
          title={"Введите email"}
          required={"Поле обязательное"}
          pattern={{
            value: regex.email,
            message: "Email должен иметь вид: 2@n.ru",
          }}
          error={errors.email}
          placeholder={"nn@ya.ru"}
          isDirty={getFieldState("email").isDirty}
        />

        <InputFormRHF
          register={register}
          name={"tel"}
          title={"Введите телефон"}
          required={"Поле обязательное"}
          error={errors.tel}
          placeholder={"+7(999)999-99-99"}
          isDirty={getFieldState("tel").isDirty}
        />

        <button
          disabled={!isValid}
          type="submit"
          name="buttonForm"
          className={style.button}
        >
          Отправить заказ
        </button>
      </form>
    </section>
  );
};

export default OrderPage;
