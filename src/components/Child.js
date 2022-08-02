import React from 'react'
import { useSelector } from 'react-redux';

const Child = () => {
    const todo = useSelector((state) => state); // Return All Store - readonly

    console.log(todo);

    return (
        <div>Child</div>
    )
}

export default Child