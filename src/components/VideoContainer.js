import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="2xl:ml-36 xl:ml-12 mt-8 flex flex-wrap gap-10">
      {videos &&
        videos.length > 0 &&
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
