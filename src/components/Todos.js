import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addAllTodo } from '../store/actions'
import Todo from './Todo'
import '../styles/Todos.css'
import AddTodo from './AddTodo';

export default function Todos() {
    const todos = useSelector((store) => store.todos)
    const dispatch = useDispatch();

    // Local state which is needed only for this component.
    const [showAddTodo, setShowAddTodo] = useState(false)

    useEffect(async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
            const data = await response.json();
            dispatch(addAllTodo(data))
        } catch (err) {
            console.log(err)
        }
    }, [])


    return (
        <div className='container'>
            <div className='todoContainer'>
                <h1>Pending Todos</h1>
            {
                todos.map((todo) => {
                    if(!todo.completed) {
                        return <Todo key={todo.id} todo={todo} />
                    }
                })
            }
            {
                showAddTodo ? <AddTodo/> : ''
            }
            <button className='plusBtn' onClick={() => setShowAddTodo(!showAddTodo)}>
                {
                    showAddTodo ? '- Cancel' : '+ Item'
                }
                </button>  
            </div>
            <div className='doneContainer'>
                <h1>Done Todos</h1>
            {
                todos.map((todo) => {
                    if(todo.completed) {
                        return <Todo key={todo.id} todo={todo} />
                    }
                })
            }    
            </div>
        </div>

    )
}
