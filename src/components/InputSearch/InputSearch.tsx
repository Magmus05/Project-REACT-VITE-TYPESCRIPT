import React from "react";
import styles from "./InputSearch.module.scss";
import debounce from "debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/pizzaSlice";

const InputSearch:React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateSearchValueInput = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

  const onClickClearInput = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const onCahgeInput = (e) => {
    setValue(e.target.value);
    updateSearchValueInput(e.target.value);
  };

  return (
    <label className={styles.inputSearch}>
      <div className={styles.buttonSearch}></div>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onCahgeInput(e)}
        className={styles.input}
        placeholder="Название пиццы..."
      />
      {value && (
        <div onClick={onClickClearInput} className={styles.buttonDelete}></div>
      )}
    </label>
  );
}

export default InputSearch;
