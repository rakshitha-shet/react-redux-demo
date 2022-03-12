import React from 'react'
import { useSelector } from "react-redux";

export default function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.numberOfCakes)
  return (
    <>
    <h1>No of cakes from Hooks - {numOfCakes}</h1>
    <button>Buy Cake</button>
    </>
  )
}
