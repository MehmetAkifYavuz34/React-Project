import React from "react";
import { baseImgUrl } from "../constants";

const ActorCard = ({ actor }) => {
  return (
    <div className="w-[160px]">
      <img className="h-[175px]" src={baseImgUrl + actor.profile_path} alt="" />
      <h2>{actor.original_name}</h2>
      <h2>{actor.character}</h2>
    </div>
  );
};

export default ActorCard;
