import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'

const Shop = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-3xl text-indigo-500 tracking-widest font-medium title-font">POPULAR PRODUCTS</h2>
    </div>
      <Popular />
    </div>

  )
}

export default Shop