import React from 'react'

function ContactUsDetails (props) {
  return (
    <div className='flex gap-6 items-center my-4'>
      <div className="h-[5rem] w-[5rem] border-2 rounded-[50%] border-[#607c47] flex justify-center items-center">
        <img
          src={props.image}
          className='h-[2.1rem]'
          alt=''
        />
      </div>
      <div>
        <p className="text-[1.36rem] font-[500] whitespace-pre max-[693px]:text-[1.47rem] max-[421px]:text-[1.34rem]">{props.detail}</p>
      </div>
    </div>
  )
}

export default ContactUsDetails
