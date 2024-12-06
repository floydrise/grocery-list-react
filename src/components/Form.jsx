import { useState } from "react";

const Form = ({ setItems }) => {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (input === "") return;
    setItems((currItems) => {
      const copiedItems = [...currItems];
      copiedItems.push(input);
      return copiedItems;
    });
    setInput("");
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <label htmlFor="new-item">Add item: </label>
      <input
        id="new-item"
        type="text"
        placeholder="New item here..."
        onChange={handleChange}
        value={input}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
