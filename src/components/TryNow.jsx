import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router'

const TryNow = () => {
  return (
    <div className='bg-black text-white py-20'>
      <div className='primary-container'>
        <div className='flex flex-col md:flex-row justify-between gap-16'>
          <div className='md:w-3/5'>
            <div>
              <h2 className='text-4xl md:text-7xl font-bold mb-8'>Try it for<br />free</h2>
              <p className='text-xl mb-8 md:max-w-lg'>Try CodeTutor for as long as you like with our free Starter plan. Purchase a paid Site plan to publish, host, and unlock additional features.</p>
              <Link to="/get-started" className='hover:text-gray-300 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700'>Get Started - it's free</Link>
            </div>
          </div>
          <div className='md:w-2/5 space-y-12'>

            <div>
              <h3 className='text-lg md:text-xl leading-relaxed font-medium mb-4'>Try CodeTutor for as long as you like with our free Starter plan. Purchase a paid Site plan to publish, host, and unlock additional features.
              </h3>
            </div>
            <div className='space-y-2'>
              <h2 className='text-xl font-bold'>Contact sales</h2>
              <p>Interested in CodeTutor Enterprise? Get in touch with our sales team to receive a free personalized demo.</p>
              <Link to="/" className='inline-flex items-center text-white hover:text-gray-300 hover:underline transition-colors'>Contact sales<HiArrowRight className='ml-2 w-5 h-5' /> </Link>
            </div>
            <div className='space-y-2'>
              <h2 className='text-xl font-bold'>Hire a Certified Partner
              </h2>
              <p>Interested in CodeTutor Enterprise? Get in touch with our sales team to receive a free personalized demo.</p>
              <Link to="/" className='inline-flex items-center text-white hover:text-gray-300 hover:underline transition-colors'>Browse Partners
                <HiArrowRight className='ml-2 w-5 h-5' /> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TryNow