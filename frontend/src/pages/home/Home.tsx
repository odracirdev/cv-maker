import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <Link to='/chat' className='bg-black rounded-full text-white font-semibold p-4'>Go to chat</Link>
    </>
);
};

export default Home;
