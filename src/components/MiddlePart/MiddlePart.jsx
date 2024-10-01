import { Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import StoryCircle from "./StoryCircle";

const story = [1, 1, 1];
const MiddlePart = () => {
  return (
    <div className="px-20">
      <div className="flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar sx={{ width: "5rem", height: "5rem" }}>
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>New</p>
        </div>
        {story.map((item) => (
          <StoryCircle />
        ))}
      </div>
    </div>
  );
};

export default MiddlePart;
