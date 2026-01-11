import { useState } from 'react'

function Todo() {
    type tododata = {
        id: string,
        todoName: string,
        todoDate?: string
    }
    const [todoName, settodoname] = useState("")
    const [todoDate, settododate] = useState("")
    const [isopen, setopen] = useState<boolean>()
    const [gettodo, setodo] = useState<tododata[]>([{
        id: String(Date.now()),
        todoName: "todo",
        todoDate: "12/2/22"
    }])

    const addtodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        let dataFromTodo: tododata = {
            id: String(Date.now()),
            todoName,
            todoDate: !todoDate ? String(Date.now()) : String(todoDate)
        }
        console.log(dataFromTodo, 'dataFromTodo')
        if (!dataFromTodo.todoName) {
            return alert("required to add soemthing innthe todo")
        }
        console.log(dataFromTodo, 'dataFromTodo')
        let up = [...gettodo, dataFromTodo]
        setodo(up)

    }


    const handeldelte = (id: String) => {
        const filterdelted = gettodo.filter((todoid) => todoid.id != id)
        setodo(filterdelted)
    }

    // console.log(gettodo)
    type paramter = {
        id: number,
        isshow: boolean
    }
    const handeloptions = (data: paramter, check: paramter) => {
        const infotopen = {

            id: Number(data),
            isshow: check
        }

        const filterdelted = gettodo.filter((todoid) => Number(todoid.id) == Number(infotopen.id))
        if (Number(filterdelted[0].id) == infotopen.id) {
            return setopen(true)

        }
        else {
            setopen(false)
        }
    }
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">

                    {/* Header */}
                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                        📝 Todo App
                    </h1>

                    {/* Form */}
                    <form onSubmit={addtodo} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Todo Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter todo"
                                onChange={(e) => settodoname(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Todo Date
                            </label>
                            <input
                                type="date"
                                onChange={(e) => settododate(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                        >
                            Add Todo
                        </button>
                    </form>

                    {/* Todo List */}
                    <div className="mt-6 space-y-3">
                        {gettodo.length == 0 ?

                            <center>

                                No Todo is Added
                            </center> :
                            gettodo?.map((data, idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border"
                                >
                                    <div onClick={() => handeloptions(data.id, true)}>
                                        <p className="font-medium text-gray-800">{data.todoName}</p>
                                        <p className="text-sm text-gray-500">{data.todoDate}</p>
                                        {isopen ? <button onClick={() => handeldelte(data.id)}>Deleted</button> : ""
                                        }                                    </div>
                                </div>
                            ))}
                    </div>

                </div>
            </div>
        </>

    )
}

export default Todo