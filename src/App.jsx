import React, { useState } from 'react'
import Products from './Products';

function App() {
  var [a, b] = useState(10);
  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      <Products data={{name: "Rahul", age: 22}} />
    </div>
  )
}

export default App