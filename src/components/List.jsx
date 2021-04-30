import React from 'react'
import '../App.scss'
import Todo from './Todo'
function List({inputText,filteredTodos, tasksArray,setTasksArray}) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(task =><Todo key={task.id} task={task} tasksArray={tasksArray} todo={task.text} completed={task.completed} setTasksArray={setTasksArray}/>)}
            </ul>
        </div>
    )
}

export default List
