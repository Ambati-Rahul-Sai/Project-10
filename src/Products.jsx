import React from 'react'

function Products({data}) {
  return (
    <div className='text-white w-full h-60 bg-zinc-800'>
      <h1>{data.name}</h1>
      <h2> {data.age} </h2>
    </div>
  )
}

export default Products