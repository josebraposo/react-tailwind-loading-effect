import { FC, useEffect, useState } from 'react';
import { ImgHTMLAttributes } from 'react';

interface CustomImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  className?: string;
}

const CustomImage: FC<CustomImageProps> = ({
  src,
  className,
  ...imgProps
}: CustomImageProps) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (src !== currentSrc) {
      setIsLoaded(false);
      setCurrentSrc(src);
    }
  }, [src, currentSrc]);

  const handleLoaded = () => {
    // simulate slow image loading
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  };

  return (
    <div className='relative'>
      <div
        className={`
           absolute inset-0 animate-pulse bg-blue-500
          ${isLoaded ? 'hidden' : ''}
        `}
      />
      <img
        className={`
        ${className} 
        ${
          isLoaded
            ? 'opacity-100 transition-opacity ease-in duration-500'
            : 'opacity-0'
        }
        `}
        src={currentSrc}
        onLoad={handleLoaded}
        {...imgProps}
      />
    </div>
  );
};

export default CustomImage;
