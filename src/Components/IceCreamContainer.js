import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import { buyIce } from '../redux';

export default function IceCreamContainer() {
    const [number, setNumber] = useState(1)
    const numOfIceCream = useSelector(state => state.ice.numOfIceCream)
    const dispatch = useDispatch();
  return (
    <>
        <h1>No of Ice cream - {numOfIceCream}</h1>
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
        <button onClick={() => dispatch(buyIce(number))}>Buy {number} Icream</button>
    </>
  )
}
