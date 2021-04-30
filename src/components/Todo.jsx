import React from 'react'
import '../App.scss'

function Todo({todo, task, completed, tasksArray, setTasksArray}) {
    const completeHandler = () =>{
        setTasksArray(tasksArray.map(item => {
            if (item.id === task.id) {
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    const deleteHandler = () =>{
        setTasksArray(tasksArray.filter(el => el.id !== task.id))
    }
    return (
        <div className={`todo ${completed ? "complete" : ""}`}>
            <li className="todo-item">{todo}</li>
            <div className="buttonDiv">
                <button className="completed" onClick={completeHandler}><i className="fas fa-check"></i></button>
                <button className="delete" onClick={deleteHandler}><i className="far fa-trash-alt"></i></button>
            </div>
            
        </div>
    )
}

export default Todo
