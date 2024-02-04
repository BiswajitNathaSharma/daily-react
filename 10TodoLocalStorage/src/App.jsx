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
    const todosTodo = todos[1]
    }, [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])
  
    
  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo ,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                        {todos.map((todo)=> (
                          <div
                          key={todo.id}
                          className='w-full'
                          >
                          <TodoItem todo={todo}/>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App