// this is with JSX code here...

import React, { createElement } from 'react'

const Hello = () => {
//     return (
//         <div className= "dummyClass">
//             <h1>Hello Miss Rozy</h1>
//         </div>
//     )
// 

// without using JSX code here...

return React.createElement('div', 
{id: 'hell', className: 'dummyClass'}, 
React.createElement('h1', null, 'Hello Miss Rozy'))
}
export default Hello