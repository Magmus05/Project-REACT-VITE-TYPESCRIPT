import React from 'react'
import style from "./InputForm.module.scss";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import {IInputFormProps} from "../../types/Types"

const InputForm: React.FC<IInputFormProps> = ({
  type,
  name,
  title,
  placeholder,
  minLength,
  maxLength,
  pattern,
}) => {
  const { values, handleChange, errors } = useFormAndValidation({});
  return (
    <label className={style.inputform}>
      <p className={style.inputform__title}>{title}</p>
      <input
        className={style.inputform__input}
        type={type}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        value={values[name] || ""}
        onChange={(e) => handleChange(e)}
        required
        id={name}
        pattern={pattern}
      ></input>
      <span className={style.inputform__error}>{errors[name]}</span>
    </label>
  );
}

export default InputForm;