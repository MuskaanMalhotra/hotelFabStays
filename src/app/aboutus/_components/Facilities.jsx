import Image from 'next/image'
import React from 'react'

const Facilities = () => {
  return (
    <div>
        <h1 className="sm:text-5xl text-2xl text-center mt-7 sm:mt-10 font-light">
        Hotel Facilities
      </h1>
      <hr className="w-2/4 mx-auto sm:my-10 my-3" />
        <div className=' grid sm:grid-cols-2 grid-cols-1 sm:mx-20 mx-10 mt-10 sm:gap-20 gap-10'>
            <div className='flex gap-5'>
                <Image className='sm:h-16 h-10 w-10 sm:w-16 ' src={"/comfort.png"} alt='great view' height={1000} width={1000}/>
                <div className='flex flex-col gap-1 sm:gap-2'>
                    <h2 className='sm:text-2xl text-lg'>Great Comfort</h2>
                    <p className='sm:text-lg text-sm font-light'>Experience unparalleled comfort with our elegantly designed rooms, featuring plush bedding, modern amenities, and a serene ambiance. Whether for business or leisure, our hotel ensures a relaxing and rejuvenating stay with personalized services and a warm, welcoming atmosphere.</p>
                </div>
            </div>
            <div className=' flex gap-5'>
                <Image className='sm:h-16 h-10 w-10 sm:w-16 ' src={"/meals.png"} alt='great view' height={1000} width={1000}/>
                <div className='flex flex-col gap-1 sm:gap-2'>
                    <h2 className='sm:text-2xl text-lg'>Appetizing Meals</h2>
                    <p className='sm:text-lg text-sm font-light'>Indulge in a delightful culinary journey with our expertly crafted meals, prepared using fresh, high-quality ingredients. From local delicacies to international cuisines, our diverse menu caters to all tastes, offering a memorable dining experience in a cozy and inviting setting.</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <Image className='sm:h-16 h-10 w-10 sm:w-16 ' src={"/bed.png"} alt='great view' height={1000} width={1000}/>
                <div className='flex flex-col gap-1 sm:gap-2'>
                    <h2 className='sm:text-2xl text-lg'>Cozy beds</h2>
                    <p className='sm:text-lg text-sm font-light'>Cozy beds in hotels are designed to provide guests with a comfortable and restful sleep experience. Featuring high-quality mattresses, soft bedding including plush comforters and pillows, and optional pillow menus for personalized comfort, these beds offer a haven of relaxation.</p>
                </div>
            </div>
            <div className=' flex gap-5'>
                <Image className='sm:h-16 h-10 w-10 sm:w-16 ' src={"/location.png"} alt='great view' height={1000} width={1000}/>
                <div className='flex flex-col sm:gap-2 gap-1'>
                    <h2 className='sm:text-2xl text-lg'>Nice Location</h2>
                    <p className='sm:text-lg text-sm font-light'>A nice hotel location is ideally situated to offer guests convenience, accessibility, and desirable surroundings. It provides easy access to nearby attractions, dining options, and transportation hubs, allowing guests to make the most of their stay.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facilities