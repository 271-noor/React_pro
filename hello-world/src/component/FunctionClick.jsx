// Event Handling or Change Event liake that mause btn click...

import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked')
    }

  return (
    <div>
        <button onClick = {clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
