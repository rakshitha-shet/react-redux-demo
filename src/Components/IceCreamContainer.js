import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { buyIce } from '../redux';

export default function IceCreamContainer() {
    const numOfIceCream = useSelector(state => state.ice.numOfIceCream)
    const dispatch = useDispatch();
  return (
    <>
        <h1>No of Ice cream - {numOfIceCream}</h1>
        <button onClick={() => dispatch(buyIce())}>Buy Icream</button>
    </>
  )
}
