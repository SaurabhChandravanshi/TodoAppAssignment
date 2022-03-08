import React, { useState } from 'react'
import '../styles/AddTodo.css';
import { addOneTodo } from '../store/actions';
import { useDispatch } from 'react-redux';

export default function AddTodo() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const addTodo = (e) => {
        e.preventDefault();
        const todo = {
            id:new Date().getTime(),
            userId:1,
            completed:false,
            title:title
        }
        dispatch(addOneTodo(todo));
        setTitle('')
    }

  return (
    <div className='form'>
    <form onSubmit={(e) => addTodo(e)}>
    <input value={title} type='text' placeholder='Todo Title..' onChange={(e) => setTitle(e.target.value)} required minLength={2}/>
    <button type='submit'>Add Item</button>
    </form>
    </div>
  )
}
