import React from 'react';
import useSpeechRecognition from '@/hooks/useSpeechaRecognitionHook';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const {
    text,
    startListening,
    stopListening,
    isListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();

  return (
    <div>
      {hasRecognitionSupport ? (
        <>
          <div>
            <button onClick={startListening}>Start Listening</button>
            <button onClick={stopListening} disabled={!isListening}>Stop Listening</button>
          </div>

          {isListening ? (
            <div>Navegador escuchando...</div>
          ) : null}

          <div>
            <p>Texto: {text}</p>
          </div>
        </>
      ) : (
        <h1>Navegador no soportado</h1>
      )}
      <Link to='/chat' className='relative top-40 bg-black rounded-full text-white font-semibold p-4'>Go to chat</Link>
    </div>
  );
};

export default Home;
