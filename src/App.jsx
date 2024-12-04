import React, { Children } from 'react'
import NestedList from './Component/NestedList'

function App() {
  const data = [
    {
      id: 1,
      name: 'Root 1',
      children: [
        {
          id: 2,
          name: 'Child 1.1',
          children: [
            {
              id: 3,
              name: 'Sub-child 1.1.1',
            },
            {
              id: 4,
              name: 'Sub-child 1.1.2',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: 'Root 2',
      children: [
        {
          id: 6,
          name: 'Child 2.1',
          children:[
            {id:7,
              name:"child 3.1"
            }
          ],
        },
      ],
    },
  ];
  return (
    <div>
      <NestedList data={data} />
    </div>
  )
}

export default App
