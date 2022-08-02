import React from 'react'
import Child from './Child'
import { useSelector, useDispatch } from 'react-redux';
import { emptyTodo, filter } from '../redux/actions/todoAction';

const Parent = () => {
    const { todo, counter } = useSelector((state) => state); // Return All Store - readonly
    const dispatch = useDispatch(); // Write data to store

    console.log(todo);

    return (
        <div>
            <div>
                <h4>Parent</h4>
                <button onClick={() => dispatch({ type: "ADD_TODO", payload: counter})}>Add to list</button>
                <button onClick={() => dispatch(filter(todo))}>Filter list</button> {/* Action Function */}
                <button onClick={() => dispatch(emptyTodo())}>Empty list</button> {/* Action Function */}
                {todo.map((t, index) => {
                    return <p key={index}>{t}</p>
                })}
            </div>
            <Child />
        </div>
    )
}

export default Parent