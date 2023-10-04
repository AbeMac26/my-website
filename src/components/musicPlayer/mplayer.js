import React from "react";
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./MusicStyles.css";

export function Mplayer() {
  const musicTracks = [
    {
      name: "Ambitionz az a Ridah",
      src: require("../../audio/Ambitionz-az-a-Ridah.mp3")
    },
    {
      name: "Next Question",
      src: require("../../audio/No-More-Questions.mp3")
    }
  ];

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <div style={{textAlign:"-webkit-center"}}>
      <h1>Music</h1>
      <AudioPlayer
        // style={{ width: "300px" }}
       
        autoPlay
        // layout="horizontal"
        src={musicTracks[trackIndex].src}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        header={`Now playing: ${musicTracks[trackIndex].name}`}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        // other props here
      />
      <div id="plList">
        <span>Title</span>
        <ol>
        {musicTracks.map(track  =>(
          <li className="plItem" src={track.src} key={track.name}>{track.name}</li>
        ))}
        </ol>
      </div>
    </div>
  );
}
