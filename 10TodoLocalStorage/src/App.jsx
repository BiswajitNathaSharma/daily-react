import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './context/todoContext'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([])
    const addTodo = (todo)=>{
      console.log("am addtodo running")
      setTodos((prev)=> [ {id:Date.now(),...todo},...prev])
    }

    const updateTodo = (id, todo)=>{
      setTodos((prev)=>prev.map((todoEle)=>(todoEle.id === id ? todo : todoEle)))
    }
    const deleteTodo =(id)=>{
      setTodos((prev)=>prev.filter((todoEle)=> todoEle.id != id))
    }
    const toggleComplete= (id)=>{
      setTodos((prev)=> prev.map((todoEle)=> todoEle.id === id ? {...todoEle, isCompleted: !todoEle.isCompleted} :todoEle))
    }

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))
      if(todos && todos.length > 0) setTodos(todos)
    }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])
  const [data, setData] = useState("")
  const [img, setImg] = useState(null)


  useEffect(() => {
        
    
    
    fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
    .then((res)=>(res.json()))
    .then((res)=>setData(res.data.content))
    
    fetch('https://inspirobot.me/api?generate=true')
    .then((res)=>(res.text()))
    .then((res)=>(setImg(res)))
  }, []);


    
    
  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}>
    <div className="flex flex-col lg:flex-row">
      <div className="bg-[#172842] lg:min-h-screen py-8 flex-grow">
        <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
          <span className="mt-2 mb-8 text-xl text-center">{data}</span>
          <h1 className="mt-2 mb-8 text-2xl font-bold text-center">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={img} alt="motivational image" className="w-full h-auto max-w-full lg:w-auto lg:min-h-screen lg:max-w-none lg:ml-4" /> {/* Adjust image size and position */}
    </div>

  </TodoProvider>
  


  )
}

export default App
