import React from 'react'

function RedHeading({text, textColor}: {text: string, textColor: string}) {
  return (
    <div className='flex items-center gap-4'>
      <div className='w-5 h-10 bg-[#DB4444] rounded'></div>
      <span className={`text-${textColor}-600 font-semibold`}>{text}</span>
    </div>
  )
}

export default RedHeading