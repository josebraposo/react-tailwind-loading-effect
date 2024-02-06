import { FC, useState } from 'react';
import LoadingImage from './LoadingImage';

const App: FC = () => {
  const [imgSrc, setImgSrc] = useState('./dog1.jpg');

  const toggleImgSrc = () => {
    setImgSrc((prevImage) =>
      prevImage === './dog1.jpg' ? './dog2.jpg' : './dog1.jpg',
    );
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='w-2/3'>
        <LoadingImage src={imgSrc} />
      </div>
      <button
        className='rounded-md mt-4 px-4 py-2 text-white bg-slate-700'
        onClick={toggleImgSrc}
      >
        Load New Image
      </button>
    </div>
  );
};

export default App;
