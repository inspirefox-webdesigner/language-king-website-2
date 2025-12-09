import React from "react";

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed h-full top-0 bottom-0 left-0 right-0 inset-0 z-[51] bg-black/90 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center px-3">
        <button
          onClick={onClose}
          className="uppercase text-white text-[15px] font-bold absolute lg:top-20 lg:right-20 right-3 top-5 z-[51] cursor-pointer"
        >
          close
        </button>
        <video
          src={videoSrc}
          controls
          autoPlay
          controlsList="nodownload"
          className="intro w-full h-auto max-w-5xl mx-auto flex items-center justify-center z-50"
        />
      </div>
    </div>
  );
};

export default VideoModal;
