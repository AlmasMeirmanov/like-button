import React, { useState } from "react"
import "./App.css"

function App(props) {
  const [count, setCount] = useState(0)
  var name = "likes"
  function updateCount(e) {
    e.preventDefault()
    setCount(count + 1)
  }

  if (count === 1) {
    name = "like"
  }
  return (
    <div class="box">
      <button onClick={updateCount}>
        {count}
        {name}
      </button>
    </div>
  )
}

export default App
