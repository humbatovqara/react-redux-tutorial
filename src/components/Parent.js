import React from 'react'
import Child from './Child'
import { useSelector } from 'react-redux';

const Parent = () => {
    const profile = useSelector((state) => state.profile); // Return All Store - readonly

    console.log(profile);

    return (
        <div>
            <Child />
        </div>
    )
}

export default Parent