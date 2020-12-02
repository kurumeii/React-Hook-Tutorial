import React, { useState, useEffect } from 'react'
import Header from '../Components/Layout/Header';
import Todos from './Todos';
import AddTodo from './AddTodo';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function TodoApp() {

    const [state, setState] = useState({
        todos: [],
    });
    // Event handler
    const handleCheckboxEvent = (id) => {
        setState({
            todo: state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                } return todo;
            })
        })
    };
    const deleteTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(resp => {
                setState({
                    todos: [...state.todos.filter(todo => { return todo.id !== id })]
                })
            })
    };

    const addTodo = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
            .then(resp => {
                console.log(resp.data);
                setState({
                    todos: [...state.todos, resp.data]
                })
            })

    };
    useEffect(() => {
        const config = {
            params: {
                _limit: 10
            }
        }
        //Get request
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
            .then((resp) => setState({ todos: resp.data }))
    }, []);

    return (
        <div className='container'>
            <Header />
            {/* Parse prop to children component */}
            <AddTodo addTodo={addTodo} />
            <Todos todos={state.todos}
                handleChange={handleCheckboxEvent}
                deleteTodo={deleteTodo}
            />
        </div>
    )
};

export default TodoApp;