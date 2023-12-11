var todoList = []

export const GET = async (request) => {
    return new Response(JSON.stringify(todoList))
}

export const POST = async (request) => {
    try {
        const d = await request.json()
        console.log(request.json())
        todoList = [...todoList, d]
        return new Response(JSON.stringify(todoList), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });

    }
}