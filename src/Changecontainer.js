import React from 'react';
import { useSelector } from "react-redux";
import Cc from './Cc'

function Changecontainer() {
    const change= useSelector((state)=>state.changedMyMind)
   // console.log('change',change)
    return (
        <div>
            {change.map(i=>(
                <Cc image={i.removedItem.delete}
                    price={i.removedItem.price}/>)
            )}
        </div>
    )
}

export default Changecontainer
