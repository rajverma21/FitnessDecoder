import React, { useState } from 'react'
import ContactUsDetails from './ContactUsDetails'
import location from '../icons/location.png'
import phone from '../icons/phone.png'
import email_icon from '../icons/email.png'
import website from '../icons/global.png'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/Config'

function ContactUs () {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [subject, setsubject] = useState('')
  const [message, setmessage] = useState('')


  const handleSubmit = async event => {
    event.preventDefault()
    console.log(name)
    console.log(subject)
    console.log(message)
    console.log(email)
    try {
      const docRef = await addDoc(collection(db, 'ContactForm'), {
        Name: name,
        Email: email,
        Subject: subject,
        Message: message
      })
    } catch {
      console.log('Data Lost')
    }
  }

  return (
    <div className='flex justify-center items-center h-[100vh] w-[100%] text-[#e0d9d9]'>
      <div className='flex border-2 rounded-3xl overflow-hidden box-shadow'>
        <div className='bg-green-900 flex flex-col px-[4rem] py-[6rem]'>
          <h1 className='text-[3rem] tracking-wide'>Let's Get in Touch</h1>
          <p>Open for ideas or just a friendly chat — Let's Make Moments!</p>
          <div>
            <ContactUsDetails
              image={location}
              detail='198 West,
21th Street Suite,
721 New York-10016'
            />
          </div>
          <div>
            <ContactUsDetails image={phone} detail='1235 2355 98' />
          </div>
          <div>
            <ContactUsDetails image={email_icon} detail='info@yoursite.com' />
          </div>
          <div>
            <ContactUsDetails image={website} detail='yoursite.com' />
          </div>
        </div>
        <form
          method='POST'
          onSubmit={handleSubmit}
          className='px-10 flex flex-col justify-center'
        >
          <div className='flex flex-col my-4 w-[100%]'>
            <div className='flex gap-8'>
              <div className='flex flex-col'>
                <label className='font-[600] text-[1.48rem] text-[#121212] mb-2'>
                  FULL NAME
                </label>
                <input
                  type='text'
                  required
                  value={name}
                  onChange={e => setname(e.target.value)}
                  className='border-b-[2px] text-[1.36rem] text-[#121212] bg-transparent border-gray-300 py-1 px-0 outline-none focus:border-green-400 '
                  placeholder='Name'
                />
              </div>
              <div className='flex flex-col'>
                <label className='font-[600] text-[1.48rem] text-[#121212] mb-2'>
                  EMAIL ADDRESS
                </label>
                <input
                  type='email'
                  required
                  value={email}
                  onChange={e => setemail(e.target.value)}
                  className='border-b-[2px] text-[1.36rem] text-[#121212] bg-transparent border-gray-300 py-1 px-0 outline-none focus:border-green-400 '
                  placeholder='Email'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col my-4 w-[100%]'>
            <label className='font-[600] text-[1.48rem] text-[#121212] mb-2'>
              SUBJECT
            </label>
            <input
              type='text'
              required
              value={subject}
              onChange={e => setsubject(e.target.value)}
              className='border-b-[2px] text-[1.36rem] text-[#121212] bg-transparent border-gray-300 py-1 px-0 outline-none focus:border-green-400 '
              placeholder='Subject'
            />
          </div>
          <div className='flex flex-col my-4 w-[100%]'>
            <label className='font-[600] text-[1.48rem] text-[#121212] mb-2'>
              MESSAGE
            </label>
            <input
              type='text'
              required
              value={message}
              onChange={e => setmessage(e.target.value)}
              className='border-b-[2px] text-[1.36rem] text-[#121212] bg-transparent border-gray-300 py-1 px-0 outline-none focus:border-green-400 '
              placeholder='Message'
            />
          </div>

          <button
            type='submit'
            className='bg-slate-400 w-[50%] mx-auto mt-[3rem] p-2 send-message-button'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
