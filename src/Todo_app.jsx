export default function Todo() {
  return (
    <div className="bg-black flex items-center justify-center min-h-screen text-yellow-500">
      <div className="w-full max-w-[70%] bg-gray-900 p-6 rounded-2xl shadow-2xl border border-yellow-500">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6 text-yellow-400">
          📝 Todo List
        </h1>

        {/* Input + Add Button */}
        <div className="flex gap-2 mb-6">
          <input 
            type="text" 
            placeholder="Type todo..."
            className="flex-1 px-4 py-2 rounded-lg bg-black border border-yellow-500 text-yellow-400 placeholder-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
            Add
          </button>
        </div>

        {/* Todo Items */}
        <ul className="space-y-3">

          {/* Todo Item */}
          <li className="flex items-center justify-between bg-black border border-yellow-600 px-4 py-2 rounded-lg">

            <div className="flex items-center gap-3">

              {/* Checkbox */}
              <input
                type="checkbox"
                className="peer w-5 h-5 accent-blue-500 cursor-pointer"
              />

              {/* Todo Text */}
              <span className="peer-checked:line-through peer-checked:decoration-blue-500 peer-checked:decoration-2 peer-checked:text-blue-400 transition">
                Tailwind
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

        </ul>

      </div>
    </div>
  );
}