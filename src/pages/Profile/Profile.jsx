import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/Post/PostCard";
import Reels from "../../components/Reels/Reels";
import UserReelCard from "../../components/Reels/UserReelCard";
import ProfileModal from "./ProfileModal";
import { useSelector } from "react-redux";

const tabs = [
  { value: "post", name: "Post" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
  { value: "repost", name: "RePost" },
];
const posts = [1, 1, 1, 1];
const reels = [1, 1, 1, 1];
const savedPost = [1, 1, 1, 1];

const Profile = () => {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false); // Controls the modal
  const handleOpenProfileModal = () => setOpen(true); // Function to open the modal
  const handleClose = () => setOpen(false); // Function to close the modal
  const [value, setValue] = React.useState("post");
  const { auth } = useSelector((store) => store);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="h-full w-full rounded-t-md"
            src="https://cdn.pixabay.com/photo/2023/07/19/12/40/trees-8136806_1280.png"
            alt="Sunset"
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://cdn.pixabay.com/photo/2024/04/19/22/25/man-8707406_1280.png"
          />
          <Button
            sx={{ borderRadius: "20px" }}
            variant="outlined"
            onClick={handleOpenProfileModal} // Attach modal open function here
          >
            Edit Profile
          </Button>
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">
              {auth.user?.firstName + " " + auth.user?.lastname}
            </h1>
            <p>
              @
              {auth.user?.firstName.toLowerCase() +
                "_" +
                auth.user?.lastname.toLowerCase()}
            </p>
          </div>
          <div className="flex gap-5 items-center py-3">
            <span>10 Posts</span>
            <span>22 Followers</span>
            <span>10 Followings</span>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item) => (
                <Tab
                  key={item.value}
                  value={item.value}
                  label={item.name}
                  wrapped
                />
              ))}
            </Tabs>
          </Box>
          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((item, index) => (
                  <div
                    key={index}
                    className="border border-slate-100 rounded-md"
                  >
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "reels" ? (
              <div className="flex justify-center flex-wrap gap-2 my-10">
                {reels.map((item, index) => (
                  <UserReelCard key={index} />
                ))}
              </div>
            ) : value === "saved" ? (
              <div className="space-y-5 w-[70%] my-10">
                {savedPost.map((item, index) => (
                  <div
                    key={index}
                    className="border border-slate-100 rounded-md"
                  >
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : (
              <div>Repost</div>
            )}
          </div>
        </section>
      </div>
      {/* Render the ProfileModal and pass the correct props */}
      <section>
        <ProfileModal open={open} handleClose={handleClose} />
      </section>
    </Card>
  );
};

export default Profile;
