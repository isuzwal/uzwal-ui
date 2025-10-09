interface Props{
    children: React.ReactNode;
}
import React from 'react'

export default function Contianer({children}:Props) {
  return (
    <div className='max-w-7xl mx-auto w-full p-2  text-white not-visited:bg-neutral-950  min-h-screen'>{children}</div>
  )
}
