import React, { useState } from 'react';
import { FaPlus, FaTrash, FaCheck, FaEdit } from 'react-icons/fa';
import './css/App.css'
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [editIndex, setEditIndex] = useState(null)
 const updateText =(value)=>{
      setTodoText(value)
   
 }
const addTodo =()=>{
   if(todoText.trim()==0){
    setErrorMessage('Please add any todo')
   }else{
      setTodos([
         ...todos,
         {id:todoText, value:todoText}
        ])
        setTodoText('')
        setErrorMessage('')
   }
  
}
 const removeTodo =(index)=>{
todos.splice(index,1)
setTodos([
   ...todos
])
 }

 const taskCompleted=(index)=>{
   const updatedTodos = [...todos];
   if(updatedTodos[index].style ==null){
      updatedTodos[index].style = { textDecoration: 'line-through', color: 'gray' };
   }else{
      updatedTodos[index].style =null;
   }
   

   // Update the state
   setTodos(updatedTodos);
 }
 const editTask=(index,value)=>{
   setTodoText(value)
   setEditIndex(index)
 }
 const saveEditedTask =(ind)=>{
   if(ind !==null){
      console.log('ind =',ind);
      const updatedArray = [...todos]
      updatedArray[ind].value=todoText
      console.log('updatedArray =',updatedArray);
      setTodos([
         ...updatedArray
      ])
      setEditIndex(null)
      setTodoText('')
   }
   
 }
  return (
   
    <div className="flex flex-col items-center justify-center  mt-40">
      <header className="flex items-center ">
       <h1 className="font-bold text-white text-6xl mb-3">To do List</h1>
    </header>
    <div>
      <p className='text-white text-sm'>{errorMessage}</p>
    </div>
    <div className="relative">
        <input
          type="text"
          id='todoInput' 
          value={todoText}
          placeholder="addTodo"
          onChange={(e) => updateText(e.target.value)}
          className="p-2 pr-10 focus:outline-none w-72" // Add other necessary styles
        />
        <button
          onClick={() =>editIndex !==null?saveEditedTask(editIndex) :addTodo()}
          className="text-orange-500 absolute top-1/2 right-2 transform -translate-y-1/2"
        >
          <FaPlus />
        </button>
      </div>

      
        <div >

        {todos.map((todos,index) => (
         <div key={todos.id}>
              <div className="bg-white text-black m-2 p-3 text-lg flex justify-between items-center transition-all duration-500 ease-in-out w-72 h-10">
         <div className="flex-1 " id={index} style={todos.style}>{todos.value} </div>
         <button className="text-white bg-red-500 text-sm px-2 py-2  focus:outline-none">
          <FaEdit onClick={() => editTask(index,todos.value)} />
        </button>
         <button className="text-white bg-orange-500 text-sm px-2 py-2  mr-0 focus:outline-none">
          <FaCheck onClick={()=>taskCompleted(index)}/>
         </button>
         <button className="text-white bg-red-500 text-sm px-2 py-2  focus:outline-none">
         <FaTrash onClick={()=>removeTodo(index)}/>
         </button>
       </div>
         </div>
        ))}   
       </div>
        
    </div>
  );
};

export default Todo;
