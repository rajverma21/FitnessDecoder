import React from 'react'

function ContactUsInputField(props) {
  return (
    <div className="flex flex-col my-4 w-[100%]">
        <label className="font-[600] text-[1.48rem] text-[#121212] mb-2">{props.heading}</label>
        <input type={props.type} required className="border-b-[2px] text-[1.36rem] text-[#121212] bg-transparent border-gray-300 py-1 px-0 outline-none focus:border-green-400 " placeholder={props.placeholder}/>
    </div>
  )
}

export default ContactUsInputField