import React from "react";
import RelatedVideos from "./RelatedVideos";
import PlayVideo from "./PlayVideo";

const WatchPage = () => {
 

  return (
    <div className="px-5 2xl:px-4 flex">
      <PlayVideo/>
      <RelatedVideos/>
    </div>
  );
};

export default WatchPage;
