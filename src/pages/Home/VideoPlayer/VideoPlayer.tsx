import { useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="w-96 h-96 rounded-full overflow-hidden border-blue-500 border-[5px] flex items-center justify-center relative">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls
        controlsList="nodownload noremoteplayback nofullscreen"
        loop
        poster="/src/assets/profile.png"
      >
        <source src="/src/assets/bio.mp4" type="video/mp4" />
      </video>
      {!isPlaying && (
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
          onClick={handlePlay}
        >
          <button className="text-2xl font-bold text-blue-400 uppercase overline animate-pulse">
            Tap Here To Know Me👋🏻
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
