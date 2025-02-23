import Grid from "@mui/material/Grid";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Routes, useLocation, Route } from "react-router-dom";
import MiddlePart from "../../components/MiddlePart/MiddlePart";
import CreateReelsForm from "../../components/Reels/CreateReelsForm";
import Reels from "../../components/Reels/Reels";
import Profile from "../Profile/Profile";
import HomeRight from "../../components/HomeRight/HomeRight";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileAction } from "../../Redux/Auth/auth.action";

const HomePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  console.log("auth ", auth);

  return (
    <div className="px-20">
      <Grid container spacing={0}>
        {/* Sidebar Section */}
        <Grid item xs={12} lg={3}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>

        {/* MiddlePart Section */}
        <Grid
          item
          xs={12}
          lg={location.pathname === "/" ? 6 : 9}
          className="px-5 flex justify-center"
        >
          <Routes>
            <Route path="/" element={<MiddlePart />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/create-reels" element={<CreateReelsForm />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Grid>

        {/* HomeRight Section */}
        {location.pathname === "/" && (
          <Grid item xs={12} lg={3}>
            <div className="sticky top-0 w-full">
              <HomeRight />
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default HomePage;
