import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../Redux/reducers/action";
import deleteIcon from "../assets/images/delete.png";
import editIcon from "../assets/images/editing.png";
import arrowIcon from "../assets/images/arrow.png";

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [editInput, setEditInput] = useState("");
  const [toggleId, setToggleId] = useState("");
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.reducer);

  return (
    <div className="home-container">
      <div>
        <h1 style={{ margin: "0", marginBottom: "8px" }}>Todo List</h1>
        <div className="form-container">
          <input
            onChange={(e) => {
              setInput(e.target.value.trim());
            }}
            type="text"
            placeholder="Add your task"
            className="input"
            value={input}
          />
          <button
            onClick={() => {
              setInput("");
              const id = uuidv4();
              dispatch(addTodo({ id: id, text: input }));
              setTodoList([...todoList, { id: id, text: input }]);
            }}
            className="bttn"
          >
            Add
          </button>
        </div>
      </div>

      <div style={{ marginTop: "24px" }} className="form-container form">
        {reduxState?.length > 0 &&
          reduxState.map((item, index) => (
            <div key={index} className="task-container">
              <p>{index + 1}.</p>

              <div className="task-name">
                {toggleId === item?.id ? (
                  <input
                    onChange={(e) => {
                      setEditInput(e.target.value);
                    }}
                    type="text"
                    placeholder="Edit task"
                    className="input"
                  />
                ) : (
                  <p>{item?.text}</p>
                )}
              </div>

              <div className="bttn-container">
                {!toggleId && (
                  <button
                    onClick={() => {
                      setToggleId(item?.id);
                    }}
                    className="bttn action-bttn"
                    title="Edit"
                  >
                    <img src={editIcon} alt="editicon" className="icon" />
                  </button>
                )}

                <button
                  onClick={() => {
                    console.log(item.id, "item .id *******");
                    // setTodoList([todoList.filter((todo) => todo?.id !== item.id)]);
                    const updatedTodoList = todoList.filter(
                      (todo) => todo?.id !== item.id
                    );
                    dispatch(deleteTodo(item.id));
                    setTodoList(updatedTodoList);
                  }}
                  className="bttn action-bttn"
                  title="Delete"
                >
                  <img src={deleteIcon} alt="deleteIcon" className="icon" />
                </button>

                {toggleId && (
                  <button
                    onClick={() => {
                      const upadteList = todoList.map((item) =>
                        item.id === toggleId
                          ? { ...item, text: editInput }
                          : item
                      );
                      dispatch(updateTodo({ id: toggleId, text: editInput }));
                      setTodoList(upadteList);
                      setToggleId("");
                    }}
                    className="bttn action-bttn"
                    title="Update"
                  >
                    <img src={arrowIcon} alt="arrowIcon" className="icon" />
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
