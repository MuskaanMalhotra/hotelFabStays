import React from 'react'
import Header from '../_components/Header'
import OurHotel from './_components/OurHotel'
import Facilities from './_components/Facilities'
import GetInTouch from '../_components/GetInTouch'

const page = () => {
  return (
    <div>
        <OurHotel/>
        <Facilities/>
        <GetInTouch/>
    </div>
  )
}

export default page