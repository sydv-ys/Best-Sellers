import React from "react";
import Book from "./Book";
import styles from "./BookList.module.css";
import {books} from "./Books"

function BookList() {
 
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
    const getBookName = (e, title) => {
    if (e.target.value === title) {
      console.log(title);
    } else {
      console.log("not a match");
    }
  };
  const Event = () => {
    const handleFormInput = (e) => {};

    const handleFormSubmittion = (e) => {
      e.preventDefault();
      console.log("form submitted");
    };

    return (
      <>
        <form onSubmit={handleFormSubmittion}>
          <h1>form</h1>
          <input type="text" name="example" onChange={handleFormInput} />
          <button onClick={getBookName}>find</button>
        </form>
      </>
    );
  };

  return (
    <div className={styles.booklist}>
      <Event />
      {books.map((book) => {
        const { id } = book;
        return <Book {...book} key={id} getBook={getBook} />;
      })}
    </div>
  );
}

export default BookList;
