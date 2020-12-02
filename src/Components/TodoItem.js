import React from 'react';
import { Icon } from 'semantic-ui-react';

function TodoItem(props) {

        /*This is the destructure technic */
        const { completed, id, title } = props.todo;
        const { handleChange, deleteTodo } = props;
        return (
            <li className='todo-item'>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => { handleChange(id) }}
                />
                <span className={completed ? "completed" : null}>
                    {title}
                </span>
                <button className="btn-remove"
                    onClick={() => { deleteTodo(id) }}><Icon fitted name='trash' size="large" />
                </button>
            </li>
        );
}

export default TodoItem;