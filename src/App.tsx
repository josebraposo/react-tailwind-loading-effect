import { FC, useState } from "react";
import LoadingImage from "./LoadingImage";

const App: FC = () => {
  const [currentImage, setCurrentImage] = useState("/dog1.jpg");

  const toggleImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === "/dog1.jpg" ? "/dog2.jpg" : "/dog1.jpg"
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LoadingImage src={currentImage} className="w-96 h-64" />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 ease-in-out hover:bg-blue-400 active:bg-blue-600"
        onClick={toggleImage}
      >
        Load Another Image
      </button>
    </div>
  );
};

export default App;
