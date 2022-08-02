import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { DEC, INC } from '../redux/constants';

const Child = () => {
    const store = useSelector((state) => state); // Return All Store - readonly
    const dispatch = useDispatch(); // Write data to store

    console.log(store);

    return (
        <div>
            Child
            <div>{store.counter}</div>
            <button onClick={() => dispatch({ type: INC })}>Increment</button>
            <button onClick={() => dispatch({ type: DEC })}>Decrement</button>
        </div>
    )
}

export default Child