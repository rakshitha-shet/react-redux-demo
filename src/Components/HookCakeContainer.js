import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from '../redux';

export default function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
  return (
    <>
    <h1>No of cakes from Hooks - {numOfCakes}</h1>
    <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </>
  )
}
