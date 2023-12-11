'use client'
import TodoForm from "@/app/components/TodoForm"
import { useRouter } from "next/navigation";
const NewTodo = () => {
    const router = useRouter()
    const addTodo = async (text) => {
        const newTodo = {
            id: Math.random().toString(),
            text: text,
        };
        try {
            const response = await fetch("/api/todo-list", {
                method: "POST",
                body: JSON.stringify(newTodo),
            });
            if (response.ok) {
                router.push("/todo-list")
            }
        } catch (error) {
            console.log(error);
        } finally {
            console.log("finally");
        }

        // setTodoList([...todoList, newTodo]);
    }
    return (
        <>
            <TodoForm addTodo={addTodo}></TodoForm>
        </>
    )
}

export default NewTodo