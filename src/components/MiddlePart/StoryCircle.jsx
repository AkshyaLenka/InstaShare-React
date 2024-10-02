import { Avatar } from "@mui/material";
import React from "react";

const StoryCircle = () => {
  return (
    <div>
      <div className="flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "3rem", height: "3rem" }}
            src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397_1280.png"
          ></Avatar>
          <p>Adam</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCircle;
