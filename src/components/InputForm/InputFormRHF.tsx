import React from "react";
import style from "./InputForm.module.scss";
import InputMask from "react-input-mask";

import { IInputFormRHFProps } from "../../types/Types";

export const InputFormRHF: React.FC<IInputFormRHFProps> = ({
  register,
  name,
  title,
  required,
  minLength,
  pattern,
  error,
  placeholder,
  isDirty,
}) => {
  // ${style.inputform__inputTel}

  return (
    <>
      {name === "tel" ? (
        <label className={style.inputform}>
          <p className={style.inputform__title}>{title}</p>

          <InputMask
            className={`${style.inputform__input} ${
              isDirty && !error ? style.inputform__input_valid : ""
            } ${error && style.inputform__input_error}`}
            placeholder={placeholder}
            mask="+7 (999) 999-99-99"
            maskChar="_"
            {...register(`${name}`, {
              required: true,
              validate: (value) =>
                value.toString().replace(/[\s-()+_]/g, "").length === 11,
            })}
          />
          <span className={style.inputform__error}>
            {error
              ? "Необходимо ввести 10 цифр номера телефона 999-999-99-99 "
              : ""}
          </span>
        </label>
      ) : (
        <label className={style.inputform}>
          <p className={style.inputform__title}>{title}</p>
          <input
            className={`${style.inputform__input} ${
              isDirty && !error ? style.inputform__input_valid : ""
            } ${error && style.inputform__input_error}`}
            placeholder={placeholder}
            {...register(`${name}`, {
              required: required,
              minLength: minLength,
              pattern: pattern,
            })}
            
          />
          <span className={style.inputform__error}>{error?.message}</span>
        </label>
      )}
    </>
  );
};
