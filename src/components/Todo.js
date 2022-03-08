import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodoStatus } from '../store/actions';
import '../styles/Todo.css'

export default function Todo({ todo }) {
    const dispatch = useDispatch();

    return (
        <div className='todoItem'>
            <div className='title' role={'todo-title'}>{todo.title}</div>
            <button role={'update'} className={todo.completed ?  ' button btn-info' : 'button btn-success' } onClick={() => dispatch(updateTodoStatus(todo.id))}>{todo.completed ? 'Todo' : 'Done'}</button>
            <button role={'delete'} className='button btn-danger' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
    )
}
