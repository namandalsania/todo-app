import React from 'react';

//import components
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => {
                    return <Todo 
                             todo={todo} 
                             setTodos={setTodos} 
                             todos={todos} 
                             key={todo.id} 
                             text={todo.text} 
                             />
                })}
            </ul>
        </div>
    );
}

export default TodoList;