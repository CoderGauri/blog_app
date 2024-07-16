import React from 'react'
import './Tictac.css'
import circle_icon from '../Assests/circle.png'
import cross_icon from '../Assests/cross.png'

let data = ["","","","","","","","",""]
function Tictac() {
  return (
    <div className='container'>
    <h1 className='title'>Tic tac toe games in <span>React</span></h1>
    <div className='board'>
    <div className='row1'>
        <div className='boxes'></div>
        <div className='boxes'></div>
        <div className='boxes'></div>
    </div>
    <div className='row2'>
        <div className='boxes'></div>
        <div className='boxes'></div>
        <div className='boxes'></div>
    </div>
    <div className='row3'>
        <div className='boxes'></div>
        <div className='boxes'></div>
        <div className='boxes'></div>
    </div></div>
    <button className='reset'>Reset</button>
    </div>
  )
}

export default Tictac