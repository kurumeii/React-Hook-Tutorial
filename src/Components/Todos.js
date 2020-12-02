import React from 'react';
import TodoItem from './TodoItem';

function Todos(props){
        return (
            <div className="todos">
                <ul>
                {/* Get the props from parent component then countinue to parse down its descendants */}
                    {props.todos.map((todo) => (
                        <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleChange={props.handleChange}
                        deleteTodo={props.deleteTodo} />
                    ))}
                </ul>
            </div>
        )
    
};
export default Todos;