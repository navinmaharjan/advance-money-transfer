import React from 'react'

const TrackPayment = () => {
  return (
    <>
        <div className='container mx-auto py-16'>
           <div className='flex gap-10'>
              <div className='w-1/2 bg-offWhite p-5'></div>
              <div className='w-1/2 bg-offWhite p-5'>
                <div className='flex flex-col gap-2'>
                  <div className='w-full flex gap-2 items-center'>
                    <p className='w-1/4'> Enter your RAD No: </p>
                    <input type="text" placeholder='RAD No.' className='w-3/4 p-2' />
                  </div>
                  <div className='w-full flex gap-2'>
                    <p className='w-1/4'> Contact No: </p>
                    <input type="text" placeholder='Contact No' className='w-3/4 p-2' />
                  </div>
                  <div className='w-full flex gap-2'>
                    <p className='w-1/4'> Email Address: </p>
                    <input type="text" placeholder='Email Address' className='w-3/4 p-2' />
                  </div>
                </div>
              </div>
           </div>
        </div>
    </>
  )
}

export default TrackPayment