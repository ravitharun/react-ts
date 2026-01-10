import React, { useState, type ChangeEvent } from 'react'

function Todo() {
    type tododata = {
        todoName: string,
        todoDate: string
    }
    const [todoName, settodoname] = useState("")
    const [todoDate, settododate] = useState("")
    const [gettodo, setodo] = useState<tododata[]>([{
        todoName: "todo",
        todoDate: "12/2/22"
    }])

    const addtodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const dataFromTodo: tododata = {
            todoName,
            todoDate
        }
        let up = [...gettodo, dataFromTodo]
        setodo(up)

    }

    // console.log(gettodo)
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
                        {gettodo?.map((data, idx) => (
                            <div
                                key={idx}
                                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border"
                            >
                                <div>
                                    <p className="font-medium text-gray-800">{data.todoName}</p>
                                    <p className="text-sm text-gray-500">{data.todoDate}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>

    )
}

export default Todo