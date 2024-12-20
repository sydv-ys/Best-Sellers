import React from "react";
import styles from "./Book.module.css";

function Book({ img, title, author, getBook, id }) {
  return (
    <div className={styles.book}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4> {author} </h4>
      <button onClick={() => getBook(id)}>click me</button>
    </div>
  );
}

export default Book;
