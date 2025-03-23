import Image from 'next/image'
import React from 'react'

const Facilities = () => {
  return (
    <div>
        <h1 className="text-4xl text-center mt-3 font-light">Hotel Facilities</h1>
        <hr className="w-1/4 mx-auto my-5" />
        <div className=' grid grid-cols-2 mx-20 my-10 gap-20'>
            <div className='flex gap-5'>
                <Image className='h-16 w-16 ' src={"/comfort.png"} alt='great view' height={1000} width={1000}/>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl'>Great Comfort</h2>
                    <p className='text-lg font-light'>Experience unparalleled comfort with our elegantly designed rooms, featuring plush bedding, modern amenities, and a serene ambiance. Whether for business or leisure, our hotel ensures a relaxing and rejuvenating stay with personalized services and a warm, welcoming atmosphere.</p>
                </div>
            </div>
            <div className=' flex gap-5'>
                <Image className='h-16 w-16 ' src={"/meals.png"} alt='great view' height={1000} width={1000}/>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl'>Appetizing Meals</h2>
                    <p className='text-lg font-light'>Indulge in a delightful culinary journey with our expertly crafted meals, prepared using fresh, high-quality ingredients. From local delicacies to international cuisines, our diverse menu caters to all tastes, offering a memorable dining experience in a cozy and inviting setting.</p>
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