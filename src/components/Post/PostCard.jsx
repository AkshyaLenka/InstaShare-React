import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import { BookmarkAdd, ExpandMore } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { createCommentAction } from "../../Redux/Post/post.Action";

const PostCard = ({ item }) => {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();
  const handleShowComment = () => setShowComments(!showComments);
  const handleCreateComment = (content) => {
    const reqData = {
      postId: item.id,
      data: {
        content,
      },
    };
    dispatch(createCommentAction(reqData));
  };

  return (
    <Card className="">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.user.firstName + " " + item.user.lastname}
        subheader={
          "@" +
          item.user.firstName.toLowerCase() +
          "_" +
          item.user.lastname.toLowerCase()
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="Kai Hiwatari"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {item.caption}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between" disableSpacing>
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton onClick={handleShowComment}>
            {<ChatBubbleIcon />}
          </IconButton>
        </div>
        <div>
          <IconButton>
            {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </div>
      </CardActions>

      {showComments && (
        <section>
          <div className="flex items-center space-x-5 mx-3 my-5">
            <Avatar sx={{}} />
            <input
              onKeyPress={(e) => {
                if (e.key == "Enter") {
                  handleCreateComment(e.target.value);
                  console.log("Enter Pressed-----", e.target.value);
                }
              }}
              className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2"
              type="text"
              placeholder="Add a comment..."
            />
          </div>
          <Divider />
          <div className="mx-3 space-y-2 my-5 text-xs">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-5">
                <Avatar
                  sx={{ height: "2rem", width: "2rem", fontSize: ".8" }}
                ></Avatar>
                <p>nice image</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </Card>
  );
};

export default PostCard;
