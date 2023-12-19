import { useState } from "react";

function App() {
  const [color, setColor] = useState("cyan");

  return (
    <div className="min-w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 rounded-xl px-2">
        <div
          className="flex flex-wrap px-5 py-4 rounded-2xl gap-3"
          style={{ backgroundColor: color }}
        >
          <button
            className="outline-none px-3 py-1 rounded-xl"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            red
          </button>
          <button
            className="outline-none px-3 py-1 rounded-xl"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            blue
          </button>
          <button
            className="outline-none px-3 py-1 rounded-xl"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            green
          </button>
          <button
            className="outline-none px-3 py-1 rounded-xl"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
