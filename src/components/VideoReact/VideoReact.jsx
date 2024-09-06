import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer () {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        width="100%"
        height="480px"
        controls={true}
        playing={false}  // Auto play control
      />
    </div>
  );
};

export default VideoPlayer;