import { useState } from "react";
import Todo_ithem from "./Todo_ithem";
import { v4 as uuid4 } from "uuid";

export default function Todo_base() {

    let [todosInfo, setTodosInfo] = useState({
        title : "Homework",
        tasks : []
    })

    let [todo_text, setTodo_text] = useState("")


  return (
    <div className="bg-black flex items-center justify-center min-h-screen text-yellow-500">
        <div className="w-full max-w-[70%] bg-gray-900 p-6 rounded-2xl shadow-2xl border border-yellow-500">

            {/* Title */}
            <h1 className="text-2xl font-bold text-center mb-6 text-yellow-400">
            📝 {todosInfo.title}
            </h1>

            {/* Input + Add Button */}
            <div className="flex gap-2 mb-6">
            <input 
                type="text" 
                placeholder="Type todo..."
                className="flex-1 px-4 py-2 rounded-lg bg-black border border-yellow-500 text-yellow-400 placeholder-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={todo_text}
                onChange={(e) => setTodo_text(e.target.value)}
                
                onKeyDown={(e) => {
                    if (e.key == "Enter"){
                        if (todo_text.trim() === "") return

                        setTodosInfo(prev => ({...prev, 
                            tasks : [...prev.tasks,
                                {
                                    id : uuid4(),
                                    text : todo_text,
                                    status : false
                                }
                            ]
                        })),
                        setTodo_text("")
                        }}}
            />
            <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition" onClick={
                () => {
                    if (todo_text.trim() === "") return

                    setTodosInfo(prev => ({...prev, 
                        tasks : [...prev.tasks,
                            {
                                id : uuid4(),
                                text : todo_text,
                                status : false
                            }
                        ]
                    })),
                    setTodo_text("")
                    }}>
                Add
            </button>
            </div>

            <Todo_ithem todos={todosInfo.tasks}/>
        </div>
    </div>
  );
}