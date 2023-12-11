'use client'
import React, { useEffect, useState } from 'react';
import { FiMinus, FiPenTool } from 'react-icons/fi'

const TodoListComponent = ({ todos, remove }) => {
    const onC = () => {
        console.log("sdfsdfsdf")
    }
    const removeItem = (index) => {
        remove(index)
    }
    const completeTodo = (event) => {
        const { value, checked } = event.target;

        console.log(value)
        console.log(checked)
    }
    return (
        <>
            <div className="flex flex-col gap-1">
                {
                    todos?.map((item, index) => {
                        return (
                            <div className="flex gap-1 items-center" key={item.id}>
                                <input type="checkbox" onChange={(e) => completeTodo(e)}></input>
                                <p className="flex-1">{item.text}</p>
                                <button type="button" onClick={() => removeItem(index)} className="text-white rounded-lg bg-red-400 px-5 py-2">
                                    <FiMinus size="2em"  ></FiMinus>
                                </button>
                                <button type="button" onClick={onC} className="text-white rounded-lg bg-green-400 px-5 py-2">
                                    <FiPenTool size="2em" ></FiPenTool>
                                </button>
                            </div>
                        )

                    })
                }
            </div>



        </>
    )
}

export default TodoListComponent