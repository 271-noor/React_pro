// List Rendering (Map  List)

import React from 'react'

function NameList() {
    // create array of Component
    const names = ['Bruce', 'Clasrk', 'Diana']

    // declare a new constant Const nameList and assign the result of the Map Operation
    const nameList = names.map(name => <h2>{name}</h2>)
  return (
    <div>

        {/*(After map Operation..)
         then in the return statement. I'll simply include the name list in the jsx */}
            {
                nameList
            }


        {/* Using Map() Method */}
        {/* {
            names.map(name => <h2>{name}</h2>)
        } */}
        
    </div>
  )
}

export default NameList
