import "./VideoPlayer.css";
import video from "../../assets/vido.mp4"; // Make sure the file name is correct
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      ref={player}
      className={`video-player ${playState ? "" : "hide"}`}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
