import React,{useState} from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';
function IcecreamView() {
  const [value, setValue] = useState(0)
  const numOfIcecreams = useSelector((state)=> state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Number of Icecreams :  {numOfIcecreams}</h1>
        <button className='btn btn-primary mx-3' onClick={()=>dispatch(ordered())}>Order Icecream </button>
        <input type="number" value={value} onChange={(e)=>setValue(parseInt(e.target.value))} />
        <button className='btn btn-primary mx-3' onClick={()=>dispatch(restocked(value))}>Restock Icecream</button>
    </div>
  )
}

export default IcecreamView