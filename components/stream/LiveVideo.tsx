"use client";
import { ElementRef, useRef, useState, useEffect } from "react";
import { useEventListener } from "usehooks-ts"; 
import { Participant, Track } from "livekit-client";
import { useTracks } from "@livekit/components-react";

import Volume from "@/components/stream/Volume";
import FullScreen from "@/components/stream/FullScreen";

interface LiveVideoProps {
  participant: Participant;
}

const LiveVideo = ({ participant }: LiveVideoProps) => {
  const videoRef = useRef<ElementRef<"video">>(null);
  const wrapperRef = useRef<ElementRef<"div">>(null);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [volume, setVolume] = useState(0);

  const toggleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else if (wrapperRef.current) {
      wrapperRef.current.requestFullscreen();
    }
  };

  const handleVolumeChange = (value: number) => {
    setVolume(+value);
    if (videoRef.current) {
      videoRef.current.muted = value === 0;
      videoRef.current.volume = +value / 100;
    }
  };

  const toggleMute = () => {
    const isMuted = volume === 0;
    setVolume(isMuted ? 50 : 0);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      videoRef.current.volume = isMuted ? 0.5 : 0;
    }
  };

  const handleFullScreenChange = () => {
    const isCurrentlyFullScreen = document.fullscreenElement !== null;
    setIsFullScreen(isCurrentlyFullScreen);
  };

  useEventListener("fullscreenchange", handleFullScreenChange, wrapperRef);

  useTracks([Track.Source.Camera, Track.Source.Microphone])
    .filter((track) => track.participant.identity === participant.identity)
    .forEach((track) => {
      if (videoRef.current) {
        track.publication.track?.attach(videoRef.current);
      }
    });

  useEffect(() => {
    handleVolumeChange(0);
  }, []);

  return (
    <div className="relative h-full flex" ref={wrapperRef}>
      <video width="100%" ref={videoRef} />
      <div className="absolute top-0 h-full w-full opacity-0 hover:opacity-100 transition-all">
        <div className="absolute bottom-0 flex h-14 w-full items-center justify-between bg-gradient-to-r from-neutral-900 px-4">
          <Volume onChange={handleVolumeChange} value={volume} onToggle={toggleMute} />
          <FullScreen isFullScreen={isFullScreen} onToggle={toggleFullScreen} />
        </div>
      </div>
    </div>
  );
};

export default LiveVideo;
