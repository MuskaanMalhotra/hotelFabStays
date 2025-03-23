import React from 'react'
import Options from './_components/Options'
import Rooms from './_components/Rooms'

const page = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-10 font-light">Book Now</h1>
      <hr className="w-1/4 mx-auto my-5" />
      <div className='flex'>
        <Options/>
        <Rooms/>
      </div>
    </div>
  )
}

export default page