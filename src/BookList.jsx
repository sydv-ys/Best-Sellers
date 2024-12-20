import React from "react";
import Book from "./Book";
import styles from "./BookList.module.css";
import { books } from "./Books";

function BookList() {
  return (
    <div className={styles.booklist}>
      {books.map((book, index) => {
        const { id } = book;
        return <Book {...book} key={id} number={index + 1} />;
      })}
    </div>
  );
}

export default BookList;
