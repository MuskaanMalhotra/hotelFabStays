import React from 'react'
import Options from './_components/Options'
import Rooms from './_components/Rooms'

const page = () => {
  return (
    <div>
      <h1 className="lg:text-5xl text-2xl text-center mt-7 lg:mt-10 font-light">
        Book Now
      </h1>
      <hr className="w-2/4 mx-auto lg:my-10 my-3" />
      <div className='flex flex-col lg:flex-row'>
        <Options/>
        <Rooms/>
      </div>
    </div>
  )
}

export default page