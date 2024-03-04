import React from "react";
import { SearchContext } from "../../App";
import styles from "./InputSearch.module.scss";
import debounce from "debounce";



function InputSearch() {
  const [value, setValue] = React.useState('')
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();
  
  const updateSearchValueInput = React.useCallback(
    debounce((str)=>{
      setSearchValue(str);
    }, 500), [],
  );

  const onClickClearInput = ()=>{
    setSearchValue("");
    setValue('');
    inputRef.current.focus()

  }

  const onCahgeInput = (e) =>{
    setValue(e.target.value);
    updateSearchValueInput(e.target.value);
  }

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
        <div
          onClick={onClickClearInput}
          className={styles.buttonDelete}
        ></div>
      )}
    </label>
  );
}

export default InputSearch;
