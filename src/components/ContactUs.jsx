import React, { useState } from 'react'
import ContactUsDetails from './ContactUsDetails'
import location from '../icons/location.png'
import phone from '../icons/phone.png'
import email_icon from '../icons/email.png'
import instagram from '../icons/instagram.png'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/Config'
import Navbar from './Navbar'
import Closing from './Closing'

function ContactUs () {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [subject, setsubject] = useState('')
  const [message, setmessage] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const docRef = await addDoc(collection(db, 'ContactForm'), {
        Name: name,
        Email: email,
        Subject: subject,
        Message: message
      })
      setname('')
      setemail('')
      setsubject('')
      setmessage('')
    } catch {
      console.log('Data Lost')
    }
  }

  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex justify-center py-[8.5rem] items-center overflow-hidden w-[100%] text-[#eee9e9] contact-us-background'>
        <div className='flex rounded-3xl bg-transparent min-[786px]:overflow-hidden max-[786px]:gap-[4rem] box-shadow-over-786px max-[786px]:flex-col max-[421px]:gap-[3rem]'>
          <div className='bg-[#3A4B65] flex flex-col px-[4rem] py-[5.2rem] box-shadow-below-786px max-[786px]:pt-[2.3rem] max-[786px]:pb-[2rem] max-[786px]:rounded-3xl max-[786px]:px-[3.5rem] max-[421px]:px-[3rem]'>
            <h1 className='text-[3.6rem] tracking-wide max-[786px]:text-[3rem] max-[693px]:text-[2.8rem] max-[440px]:text-[2.3rem]'>
              Let's Get in Touch
            </h1>
            <p className='text-[1.5rem] my-8 font-[500] max-[786px]:text-[1.47rem] max-[693px]:text-[1.36rem] max-[693px]:my-4 max-[440px]:text-[1.2rem]'>
              Open for ideas or just a friendly chat — <br />{' '}
              <span className=''>Let's Make Moments!</span>
            </p>
            {/* <div>
            <ContactUsDetails
              image={location}
              detail='198 West,
21th Street Suite,
721 New York-10016'
            />
          </div> */}
            <div>
              <ContactUsDetails image={phone} detail='+91 62641-99923' />
            </div>
            <div>
              <ContactUsDetails
                image={email_icon}
                detail='myfitnessdecoder@gmail.com'
              />
            </div>
            <div>
              <a
                href='https://www.instagram.com/getfitnessdecoder?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D'
                target='_blank'
              >
                <ContactUsDetails
                  image={instagram}
                  detail='getfitnessdecoder'
                />
              </a>
            </div>
          </div>
          <form
            method='POST'
            onSubmit={handleSubmit}
            className='px-10 flex flex-col justify-center bg-white max-[786px]:py-[2.8rem] max-[786px]:rounded-3xl box-shadow-below-786px max-[786px]:px-[3.5rem] max-[440px]:px-[2.8rem] max-[440px]:py-[1.8rem]'
          >
            <div className='flex flex-col my-4'>
              <div className='flex gap-8 max-[440px]:flex-col'>
                <div className='flex flex-col'>
                  <label className='font-[600] text-[1.48rem] text-[#121212] mb-2 max-[440px]:text-[1.37prem] max-[421px]:text-[1.3rem]'>
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
                  <label className='font-[600] text-[1.48rem] text-[#121212] mb-2 max-[440px]:text-[1.37prem] max-[421px]:text-[1.3rem]'>
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
              <label className='font-[600] text-[1.48rem] text-[#121212] mb-2 max-[440px]:text-[1.37prem] max-[421px]:text-[1.3rem]'>
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
              <label className='font-[600] text-[1.48rem] text-[#121212] max-[440px]:text-[1.37prem] max-[421px]:text-[1.3rem] mb-[3rem]'>
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
            {/* <button
              type='submit'
              className='bg-slate-400 w-[58%] mx-auto mt-[3rem] p-3 send-message-button max-[440px]:text-[1.37prem] max-[500px]:mt-[1.75rem]'
            >
              Send Message
            </button> */}
            <div className='flex justify-center items-center py-[2rem]'>
              <button
                type='submit'
                className='login-button w-[56%] max-[960px]:px-[1.6rem] max-[960px]:py-[0.8rem] max-[700px]:px-[1.3rem] max-[700px]:py-[0.5rem]'
              >
                <span className='text-[1.36rem] font-[500] max-[960px]:text-[1rem] max-[570px]:text-[0.8rem] '>
                  Send Message
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Closing />
    </div>
  )
}

export default ContactUs
