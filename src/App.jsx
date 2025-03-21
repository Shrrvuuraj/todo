import React, { useState } from "react";
import gif from "./assets/delete.gif";
import up from "./assets/up.png";
import down from "./assets/down.png";
import add from "./assets/add.png";
import w from "./assets/static.png"
import "./app.css";
function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const change = () => {
    if (todo.trim() !== "") {
      setList([...list, todo]);

      setTodo("");
    }
  };
  const deleteItem = (idx) => {
    setList(list.filter((_, index) => index !== idx));
  };
  const upItem = (idx) => {
    if (idx > 0) {
      const updatedList = [...list];
      [updatedList[idx], updatedList[idx - 1]] = [
        updatedList[idx - 1],
        updatedList[idx],
      ];

      setList(updatedList);
    }
  };
  const downItem = (idx) => {
    if (idx < list.length - 1) {
      const updatedList = [...list];
      [updatedList[idx], updatedList[idx + 1]] = [
        updatedList[idx + 1],
        updatedList[idx],
      ];

      setList(updatedList);
    }
  };
  return (
    <div className="container ">
    <h2 className="h2">TODO APP</h2>
    <div className="main">
      <div className="input">
        <input
        className="todo-input"
          type="text"
          value={todo}
          placeholder="Enter a Task"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />

        <button onClick={change} className="add custom-button">
          <img src={add} />
        </button>
      </div>

   <ul className="list">
   {list.map((item, idx) => (
        <li key={idx} className="todo-list">
          <div className="item-container">{item}</div>
          <div className="button-container">
            
          <button className="custom-button"  onClick={() => upItem(idx)}>
            <img src={up} />
          </button>
          <button className="custom-button gif-static" onClick={() => deleteItem(idx)}>
            <img id="gif" src={gif} />
            <img id="static" src={w} />
          </button>
          <button
          className="custom-button " 
            onClick={()  => {
              downItem(idx);
            }}
          >
            <img src={down} />
          </button></div>
        </li>
      ))}
   </ul>
    </div></div>
  );
}
export default App;
