import { useState } from "react"

export default function Todo(){

  let[todos, setTodos] = useState([])
  let[text, setText] = useState("")

  let status = text != "" ? true : false

  function clickhandler(){
    status && 
    setTodos(todos.concat(text))
    setText("")
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-10">
      
      <h1 className="text-3xl font-bold text-blue-400 mb-6">
        Todo App
      </h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={text}
          placeholder="type your todos"
          onChange={(e) => setText(e.target.value)}
          className="px-4 py-2 rounded bg-gray-900 text-yellow-400 border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <button
          onClick={clickhandler}
          className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((item) => (
          <li
            key={item.id}
            className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent"
          >
            {item}
          </li>
        ))}
      </ul>

    </div>
  )
}
