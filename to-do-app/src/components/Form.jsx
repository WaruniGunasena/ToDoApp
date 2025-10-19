import React, { useState } from "react";
import styles from "./form.module.css";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({name:"" , done:false});

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"" , done:false});
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          placeholder="Enter todo item..."
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({name:e.target.value, done:false})}
        ></input>
        <button className={styles.moderButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
