import React from 'react'

const GetInTouch = () => {
  return (
    <div>
        <h1 className="text-4xl text-center mt-10 font-light">
        Get In Touch
      </h1>
      <hr className="w-2/4 mx-auto my-7" />
      <div>
        <form className='flex flex-col gap-5 px-20'>
            <input required className='border p-3 text-lg border-gray-400' type='text' placeholder='Your Name'/>
            <input required className='border p-3 text-lg border-gray-400' type='email' placeholder='E-mail'/>
            <input required className='border p-3 text-lg border-gray-400' type='tel' placeholder='Contact Number'/>
            <input required className='border p-3 text-lg border-gray-400' type='text' placeholder='Location Looking For'/>
            <label className='text-lg text-gray-600'>Your Message (optional)</label>
            <textarea className='border p-3 text-lg border-gray-400' rows='5'></textarea>
            <button type='submit' className='w-fit py-2 px-5 text-lg font-medium text-white bg-[#cdb97c] hover:bg-[#cdb16c]'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default GetInTouch