import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

const TodoList = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );
    const [inputError, setInputError] = useState("");
    // add task
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            setList([...list, { input, id: uuid(), isChecked: false }]);
            setInputError("");
        } else setInputError("You have to type something!");

        // empty input: initialise
        setInput("");
    };
    const isCheckedHandle = (taskId) => {
        setList((prevState) => {
            const newList = prevState.map((item) => {
                return item.id === taskId
                    ? { ...item, isChecked: !item.isChecked }
                    : item;
            });
            return newList;
        });
    };
    // delete task
    const deleteTask = (taskId) => {
        setList(list.filter((el) => el.id !== taskId));
    };
    // Store list to LocalStorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(list));
    }, [list]);
    return (
        <div>
            <form className="mb-5" onSubmit={handleSubmit}>
                <div className="input-group input-group-lg mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type a task"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                </div>
                {inputError ? <p className="text-danger">{inputError}</p> : ""}
                <button className="btn btn-lg btn-primary px-5">Add</button>
            </form>
            {list.map((todo) => (
                <div
                    key={todo.id}
                    className="d-flex gap-3 fs-4 align-items-start justify-content-between"
                >
                    <div className="d-flex gap-3">
                        <p
                            style={
                                todo.isChecked
                                    ? { textDecoration: "line-through" }
                                    : { textDecoration: "none" }
                            }
                        >
                            {todo.input}.
                        </p>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={todo.isChecked}
                            onChange={() => isCheckedHandle(todo.id)}
                        />
                    </div>

                    <button
                        className="btn btn-dark"
                        onClick={() => deleteTask(todo.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
