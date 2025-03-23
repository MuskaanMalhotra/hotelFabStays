import Image from 'next/image'
import React from 'react'

const Facilities = () => {
  return (
    <div>
        <h1 className="text-4xl text-center mt-3 font-light">Hotel Facilities</h1>
        <hr className="w-1/4 mx-auto my-5" />
        <div className=' grid grid-cols-2 mx-20 my-10 gap-20'>
            <div className='flex gap-5'>
                <Image className='h-16 w-16 ' src={"/scope.png"} alt='great view' height={1000} width={1000}/>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl'>Great View</h2>
                    <p className='text-lg font-light'>The Orion Group of Hotels stands out for its impeccable hospitality and stunning locations that offer guests unparalleled views.</p>
                </div>
            </div>
            <div className=' flex gap-5'>
                <Image className='h-16 w-16 ' src={"/pool.png"} alt='great view' height={1000} width={1000}/>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl'>Swimming Pool</h2>
                    <p className='text-lg font-light'>The Orion Group of Hotels stands out for its impeccable hospitality and stunning locations that offer guests unparalleled views.</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <Image className='h-16 w-16 ' src={"/bed.png"} alt='great view' height={1000} width={1000}/>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl'>Cozy beds</h2>
                    <p className='text-lg font-light'>Cozy beds in hotels are designed to provide guests with a comfortable and restful sleep experience. Featuring high-quality mattresses, soft bedding including plush comforters and pillows, and optional pillow menus for personalized comfort, these beds offer a haven of relaxation.</p>
                </div>
            </div>
            <div className=' flex gap-5'>
                <Image className='h-16 w-16 ' src={"/location.png"} alt='great view' height={1000} width={1000}/>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl'>Nice Location</h2>
                    <p className='text-lg font-light'>A nice hotel location is ideally situated to offer guests convenience, accessibility, and desirable surroundings. It provides easy access to nearby attractions, dining options, and transportation hubs, allowing guests to make the most of their stay.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facilities