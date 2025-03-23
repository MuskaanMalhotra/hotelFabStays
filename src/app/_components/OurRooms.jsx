import Image from 'next/image'
import React from 'react'

const OurRooms = () => {
  return (
    <div className='sm:mb-20'>
        <h1 className="sm:text-5xl text-2xl text-center mt-7 sm:mt-10 font-light">
        Gallery
      </h1>
      <hr className="w-2/4 mx-auto sm:my-10 my-3" />
      <div>
              {/*upper loop */}
      <div className="flex overflow-hidden space-x-16 group mt-5 sm:mx-4">
        <div className="flex sm:space-x-10 space-x-3 animate-loop-scroll group-hover:[animation-play-state:paused]">
          <div className="flex items-center flex-shrink-0">
            <Image src="/img.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img1.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img2.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img3.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img4.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img5.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img6.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img7.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img1.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img2.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img3.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img4.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img5.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img6.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img7.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
        </div>
      </div>
      {/* lower loop */}
      <div className="flex overflow-hidden space-x-16 group sm:mt-10 mt-5 sm:mx-4">
        <div className="flex sm:space-x-10 space-x-3 animate-loop-scroll2 group-hover:[animation-play-state:paused]">
          <div className="flex items-center flex-shrink-0">
            <Image src="/img.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img1.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img2.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img3.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img4.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img5.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img6.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img7.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img1.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img2.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img3.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img4.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img5.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img6.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
          <div className="flex items-center flex-shrink-0">
            <Image src="/img7.JPG" className='sm:h-52 h-28 w-40 sm:w-80' alt="pic" width={1000} height={1000} />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default OurRooms