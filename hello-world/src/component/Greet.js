// this is Functional Component code


import React from 'react'

// function Greet() {
//     return <h1>Hello Rozy</h1>
// }

const Greet = (props) => {

        console.log(props)

    return (
        <div>

            <h1>
                Hello {props.name } a.k.a {props.heroName}
            </h1>
            {props.Children}

        </div>
        )
        
}

export default Greet