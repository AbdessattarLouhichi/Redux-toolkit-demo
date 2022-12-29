import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

function CakeView() {
    const [value, setValue] = useState(0)
    const numOfCakes = useSelector((state)=>state.cake.numOfCakes);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Number of Cakes : {numOfCakes}</h1>
        <button className='btn btn-primary mx-3' onClick={()=>dispatch(ordered())}>Order cake </button>
        <input type="number" value={value} onChange={(e)=>setValue(parseInt(e.target.value))} />
        <button className='btn btn-primary mx-3' onClick={()=>dispatch(restocked(value))}>Restock cakes </button>
    </div>
  )
}

export default CakeView