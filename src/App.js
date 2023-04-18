import React, { useState } from 'react'
import Like from './components/Like'
import RenderPic from './components/RenderPic'
import Render from './components/Render'
import Counter from './components/Counter'

const App = () => {
  const [counter,setCount] = useState(0)
  const increment = () => {
    setCount(counter+1);
  }
  const decrement = () => {
    setCount(counter-1);
  }
  return (
    <div>
      <Like></Like>
      <RenderPic></RenderPic>
      <Render></Render>
      <Counter counter = {counter} increment = {increment} decrement= {decrement}></Counter>
    </div>
  )
}

export default App