import { useState, useCallback } from "react";

type FormInputs = {
  [key: string]: string | number; // значение может быть строкой, числом
};

export function useFormAndValidation(inputValues: FormInputs) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState<FormInputs>({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (
      e.target.validationMessage === "Введите данные в указанном формате." &&
      e.target.name === "name"
    ) {
      setErrors({
        ...errors,
        [name]:
          "Имя должно содержать только латиницу, кириллицу, пробел или дефис",
      });
    } else {
      setErrors({ ...errors, [name]: e.target.validationMessage });
    }
    const formData = e.target as HTMLInputElement | null;
    if (formData) {
      const parentForm = formData.closest("form");

      if (parentForm) {
        setIsValid(parentForm.checkValidity());
        const btn: HTMLButtonElement | null = parentForm.querySelector(
          "[name='buttonForm']"
        );
        if (parentForm.checkValidity()) {
          btn ? (btn.disabled = false) : "";
        } else {
          btn ? (btn.disabled = true) : "";
        }
      }
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}

// запуск валидации
//  const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation()
