// List Rendering (Map  List)

import React from 'react'

function NameList() {
    // create array of Component
    const persons = [
      {
        id: 1,
        name: 'Bruce',
        age: 30,
        skill: 'React'
      },
      {
        id: 2,
        name: 'Clark',
        age: 25,
        skill: 'Angular'
      },
      {
        id: 3,
        name: 'Diana',
        age: 28,
        skill: 'Vue'
      },
    ]

    // declare a new constant Const nameList and assign the result of the Map Operation
    const personList = persons.map(person => <Person person={person} />
    )
  return (
    <div>
        {/*(After map Operation..)
         then in the return statement. I'll simply include the name list in the jsx */}
            {
                personList
            }
    </div>
  )
}

export default NameList
