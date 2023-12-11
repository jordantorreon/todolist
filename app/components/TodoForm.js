'use client'
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim()) {
            addTodo(todo);
            setTodo('');
        }
    };

    return (
        <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-row gap-3 text-center mb-5">
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Add a new todo"
                    className="flex-1 px-5 py-3 border-solid border-2 rounded-md "
                />
                <button type="submit" className="px-5 py-2 bg-blue-500 rounded-md text-white">Add</button>
            </div>
        </form>
    );
};

export default TodoForm;