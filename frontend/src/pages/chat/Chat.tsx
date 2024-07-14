import { Input } from '@/components/ui/input';
import React from 'react';
import { Link } from 'react-router-dom';

const Chat: React.FC = () => {
  return (
    <>
     <Input type="text" placeholder="Escribe algo..." />
     <Link to='/' className='bg-black rounded-full text-white font-semibold p-4'>Go to home</Link>
    </>
  );
};

export default Chat;
