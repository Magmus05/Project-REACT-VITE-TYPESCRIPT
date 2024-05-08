import React from "react";
import styles from "./NotFound.module.scss";

export const NotFound: React.FC = () =>{
  return (
    <div className="container">
      <h1 className={styles.title}>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению данной страницы не существует
      </p>
    </div>
  );
}
