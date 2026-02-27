export default function Todo_ithem({todos}){
    return(
        <div>
            {/* Todo Items */}
                <ul className="space-y-3">

                {/* Todo Item */}

                {todos.map((ithem, index) =>
                
                <li 
                className="flex items-center justify-between bg-black border border-yellow-600 px-4 py-2 rounded-lg"
                key={index}>

                    <div className="flex items-center gap-3">

                        {/* Checkbox */}
                        <input
                            type="checkbox"
                            className="peer w-5 h-5 accent-blue-500 cursor-pointer"
                        />

                        {/* Todo Text */}
                            
                        <span key={index} className="peer-checked:line-through peer-checked:decoration-blue-500 peer-checked:decoration-2 peer-checked:text-blue-400 transition">
                            {ithem.text}
                        </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button className="hover:scale-110 transition">
                            <img 
                            src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                            className="w-5 h-5 filter invert sepia saturate-500 hue-rotate-10"
                            alt="edit"
                            />
                        </button>

                        <button className="hover:scale-110 transition">
                            <img 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                            className="w-5 h-5 filter invert sepia saturate-500 hue-rotate-10"
                            alt="delete"
                            />
                        </button>
                    </div>

                </li>
)}
                </ul>

      </div>
    )
}