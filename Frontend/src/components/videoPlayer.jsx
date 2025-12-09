import React, { useState } from "react";
import ImageWithToggle from "./ImageWithToggle";

const VideoPlayer = ({
  videoSrc,
  thumbnail,
  wrapperClassName = "",
  videoClassName = "",
  thumbnailClassName = "",
  playButtonClassName = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden bg-black ${wrapperClassName}`}
    >
      {isPlaying ? (
        <video
          src={videoSrc}
          controls
          controlsList="nodownload"
          autoPlay
          className={`w-full  ${videoClassName}`}
        />
      ) : (
        <div
          className="relative w-full h-full cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          <ImageWithToggle
            src={thumbnail}
            alt="Video thumbnail"
            className={`w-full onject-cover ${thumbnailClassName}`}
          />
          <div className="absolute inset-0 flex items-center justify-center transition">
            <div
              className={`w-16 h-16 bg-black/40 rounded-full flex items-center justify-center ${playButtonClassName}`}
            >
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
