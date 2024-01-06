import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnoprstuvwxyz";
    let nums = "1234567890";
    let syms ="!@#$%^&*()~`/";

    if (numAllowed){
          str += nums
        }
    if (charAllowed){ 
      str += syms
    }
    if (numAllowed && charAllowed) {str = str + nums + syms;}  
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword]);
  useEffect(() => {passwordGenerator()},[length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg shadow-md py-5 px-4 bg-gray-500 my-10">
        <div className="flex rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-600 text-white px-3 cursor-pointer">
            copy
          </button>
        </div>
        <div className="flex gap-x-2 text-lg">
          <div className="flex items-center gap-x-3">
            <input
              type="range"
              min={8}
              max={30}
              value={length}
              className="cursor-pointer"
              name="range"
              id="range"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="range">length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="char"
              id="char"
              className="cursor-pointer"
              onChange={()=>{
                setCharAllowed((prev)=> !prev)
              }}
            />
            <label htmlFor="char">Character</label>

            <input
              type="checkbox"
              className="cursor-pointer"
              name="num"
              id="num"
              onChange={()=>{
                setNumAllowed((prev)=> !prev)
              }}
            />
            <label htmlFor="num">Number</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
