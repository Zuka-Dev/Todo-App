import React, { useEffect, useState } from 'react'
import './App.scss';
//Importing Components
import Form from './components/Form';
import List from './components/List';

function App() {
  
  //State for the Input
  const [inputText,setInputText] = useState("");
  //This is a state to store the input as an Array
  const [tasksArray, setTasksArray] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  // the passed down function which is setInputText has been set to the value from
  //the child component and has updated the state of the inputText to the data/info gotten from the
  //child component which is the e.target.value
  const clearAll = () => setTasksArray([])
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(tasksArray.filter(task=>task.completed === true))
        break;
        case "uncompleted":
          setFilteredTodos(tasksArray.filter(task=>task.completed === false))
          break;
      default:
        setFilteredTodos(tasksArray)
        break;
    }
  }
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(tasksArray))
    
  }
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]) )
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(tasksArray)))
      setTasksArray(todoLocal)
    }
  }
  useEffect(()=>{
    getLocalTodos()
  },[])
  //use effect
  useEffect(()=>{
    filterHandler()
    saveLocalTodos()
  },[tasksArray, status])
  //saving to local storage
  
  return (
    <div className="App">
        <h1>Zuka's Todo List</h1>
        <Form inputText={inputText} 
              tasksArray={tasksArray} 
              setTasksArray={setTasksArray} 
              setInputText={setInputText} 
              setStatus={setStatus}/>

        <List inputText={inputText} 
              tasksArray={tasksArray} 
              setTasksArray={setTasksArray}
              status={status}
              filteredTodos={filteredTodos}/> 
        <button onClick={clearAll} className="clear-all">Clear All</button>

    </div>
  );
}

export default App;
