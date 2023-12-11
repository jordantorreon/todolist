
'use client'

import Link from "next/link"
import { FaPrint } from 'react-icons/fa';
import TodoForm from "../components/TodoForm";
import { useState, useEffect } from "react";
import TodoListComponent from "../components/TodoListComponent";

const TodoList = () => {
    const [todoList, setTodoList] = useState([])

    const fetchTodoList = async () => {
        const response = await fetch("/api/todo-list");
        const data = await response.json();
        setTodoList(data);
    };

    useEffect(() => {
        fetchTodoList()
    }, [])
    useEffect(() => {
        console.log(todoList)
    }, [todoList])

    const removeFromTodoList = (index) => {
        setTodoList(todoList.filter((_, i) => i !== index));
    }

    const fetchExternalApi = async () => {

        const url = 'https://sales-tax-calculator.p.rapidapi.com/rates';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '75ea7d2780msh1c6e5fe81b3b69cp104617jsne9da80f31bd4',
                'X-RapidAPI-Host': 'sales-tax-calculator.p.rapidapi.com'
            },
            body: JSON.stringify({
                city: 'Menlo Park',
                state: 'CA',
                street: '1 Hacker Way',
                zip: '94025'
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div className="w-1/2 mx-auto">
            {/* <Link href={"/todo-list/new"}><button className="my_button">Create</button></Link> */}
            <button className="my_button" onClick={fetchExternalApi}>Create</button>
            <TodoListComponent todos={todoList} remove={removeFromTodoList} />
        </div>
    )
}

export default TodoList