import React from 'react'
import '../App.scss'

function Form({inputText, filteredTodos, setInputText, tasksArray, setTasksArray, setStatus}) {
    //A function
    const inputTextHandler = e => {
        //This is passing down the setFunction from the app component
        //and therefore inputing the target value to the passed down function
        setInputText(e.target.value)
    }
    const submitHandler = e => {
        e.preventDefault();
        inputText === "" ? alert("Give an Input") : setTasksArray([...tasksArray,{text:inputText, completed:false, id: Math.random() * 1000 }])

        setInputText("");
    }
    const statusHandler = (e) => {
        console.log(e.target.value)
        setStatus(e.target.value)
    }
    return (
        <div>
            <form >
                <div className="form-div">
                    <input onChange={inputTextHandler} type="text" name="" id="" className="todo-input" value={inputText}/>
                    <button onClick={submitHandler} type="submit" className="todo-btn"><i class="fas fa-plus"></i></button>
                    <div className="select">
                    <select name="todos" onChange={statusHandler}className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                </div>
                
            </form>
        </div>
    )
}

export default Form
