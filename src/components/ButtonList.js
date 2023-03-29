import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex gap-2">
      <Button name="All" />
      <Button name="Music" />
      <Button name="Melodies" />
      <Button name="Jukebox" />
      <Button name="Cricket" />
      <Button name="Live" />
      <Button name="News" />
      <Button name="Gadgets" />
      <Button name="Trailers" />


      <Button name="Mixes" />
      <Button name="News" />
      {/* <Button name="New to you" / */}
    </div>
  );
};

export default ButtonList;
