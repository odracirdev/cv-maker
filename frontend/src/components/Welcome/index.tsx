import React from 'react'
import Logo from '../Logo'
import Card from './Card'

const Welcome: React.FC = () => {
  return (
    <div className='size-full flex flex-col justify-end items-center gap-20 pb-20'>
      <Logo width={220} />
      <div className='flex gap-6'>
        <Card
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sed.'
          icon={<svg className='text-teal-600' width="22" height="22" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 1L0 4.5l2 .9v1.7c-.6.2-1 .8-1 1.4s.4 1.2 1 1.4v.1l-.9 2.1C.8 13 1 14 2.5 14s1.7-1 1.4-1.9L3 10c.6-.3 1-.8 1-1.5s-.4-1.2-1-1.4V5.9L7.5 8L15 4.5zm4.4 6.5l-4.5 2L5 8.4v.1c0 .7-.3 1.3-.8 1.8l.6 1.4v.1c.1.4.2.8.1 1.2c.7.3 1.5.5 2.5.5c3.3 0 4.5-2 4.5-3z"></path></svg>}
        />

        <Card
          text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, veritatis!'
          icon={<svg className='text-purple-600' width="22" height="22" viewBox="0 0 11 11"><path d="M5.4 0L4 3.5H0l3 3L1.5 11l3.9-2.6L9.5 11L8 6.5l3-3H7L5.4 0z" fill="currentColor"></path></svg>}
        />

        <Card
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, iure.'
          icon={<svg className='text-red-600' width="22" height="22" viewBox="0 0 15 15"><path fill="currentColor" d="M13.91 7.75c-1.17 2.25-4.3 5.31-6.07 6.94a.5.5 0 0 1-.67 0C5.39 13.06 2.26 10 1.09 7.75C-1.48 2.8 5-.5 7.5 4.45C10-.5 16.48 2.8 13.91 7.75"></path></svg>}
        />
        
        <Card
          text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, officia?'
          icon={<svg className='text-yellow-600' width="22" height="22" viewBox="0 0 11 11"><path d="M8 3V1.578L7.36 1H3.64L3 1.748V3H1.5l-.5.5v6l.5.5h8l.5-.5v-6L9.5 3H8zM4 2h3v1H4V2z" fill="currentColor"></path></svg>}
        />
      </div>
    </div>
  )
}

export default Welcome
