import React from 'react'

type CardProps = {
  text: string
  icon: React.ReactNode
}

const Card: React.FC<CardProps> = ({ text, icon }: CardProps) => {
  return (
    <div className='border border-zinc-800/80 rounded-xl p-4 text-sm text-pretty flex flex-col gap-2 bg-zinc-900/70'>
      {icon}
      <p className='text-zinc-300'>{text}</p>
    </div>
  )
}

export default Card
