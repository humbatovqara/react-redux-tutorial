import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { asyncAddTodo } from '../redux/reducers/profileReducer';

const TodoWindow = () => {
    const store = useSelector((state) => state); // Return All Store - readonly
    const dispatch = useDispatch(); // Write data to store

    // console.log(store.profile[0]);

    // useEffect(() => {

    // }, [])

    return (
        <div>
            <h1>Todo App</h1>
            <form>
                <input type="text" placeholder='Enter Task' />
            </form>
            <ul>
                <li>
                    Todo 1
                    <button onClick={() => dispatch(asyncAddTodo())}>Delete</button>
                </li>
                <li>
                    Todo 2
                    <button>Delete</button>
                </li>
                <li>
                    Todo 3
                    <button>Delete</button>
                </li>
            </ul>
        </div>
    )
}

export default TodoWindow