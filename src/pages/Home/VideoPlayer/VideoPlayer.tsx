import { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault(); // Prevents default behavior of controls
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play(); // Play the video if paused
      } else {
        videoRef.current.pause(); // Pause the video if playing
      }
    }
  };

  return (
    <div
      className="w-[380px] h-80 rounded-2xl overflow-hidden border-blue-500  hover:border-stone-500 border-[5px] flex items-center justify-center relative cursor-pointer"
      onClick={handleContainerClick}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover pointer-events-none" // Makes video ignore pointer events
        loop
        poster="/src/assets/poster-video.gif"
      >
        <source src="/src/assets/bio.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
