// import React from 'react'
import style from "./InputForm.module.scss";

function InputForm({
  type,
  name,
  title,
  placeholder,
  error,
  handleChange,
  value,
  minLength,
  maxLength,
  pattern,
}) {

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
        value={value || ""}
        onChange={handleChange}
        required
        id={name}
        pattern={pattern}
      ></input>
      <span className={style.inputform__error}>{error}</span>
    </label>
  );
}

export default InputForm;