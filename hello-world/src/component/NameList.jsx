// List Rendering (Map  List)

import React from 'react'
import Person from './Person'

function NameList() {
    // create array of Component
    const names = ['Bruce', 'Clark', 'Diana', 'Preeti']
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
      }
    ]
    // declare a new constant Const nameList and assign the result of the Map Operation
    
    // const personList = persons.map(person => <Person key = {person.id} person={person} />)
    const nameList = names.map((name, index) => <h2 key={index}> {index} {name} </h2>)
  return (
    <div>
        {/*(After map Operation..)
         then in the return statement. I'll simply include the name list in the jsx */}
            {
                // personList
                nameList
            }
    </div>
  )
}

export default NameList
