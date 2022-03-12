import React from 'react'
import {connect}  from "react-redux";
import { buyCake } from '../redux'

const CakeContainer = (props) =>{
  return (
      <>
        <h1>No of Cakes {props.numberOfCakes}</h1>
        <button onClick={props.buyCake}>Buy Cakes</button>
      </>
  )
}

const mapStateToProps = state => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
