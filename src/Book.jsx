import React from "react";
import styles from "./Book.module.css";

function Book({ img, title, author, number }) {
  console.log(number);

  return (
    <div className={styles.book}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4> {author} </h4>
      <span className={styles.number}>{`# ${number}`}</span>
    </div>
  );
}

export default Book;
