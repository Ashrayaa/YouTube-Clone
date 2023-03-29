import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails} = snippet;
  return (
    <div className="flex flex-col w-80 rounded-lg gap-2">
      <img className="rounded-lg" alt="thumbnails" src={info?.snippet?.thumbnails?.medium?.url} />
      <ul className="flex flex-col ">
        <li className="font-semibold py-1">{info?.snippet?.title}</li>
        <li className="text-sm text-slate-400">{info?.snippet?.channelTitle}</li>
        <li className="text-sm text-slate-400">{info?.statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
