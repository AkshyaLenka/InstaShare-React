import Grid from "@mui/material/Grid2";
import React from "react";
import Sidebar from "../../components/Sidebar";
import { Routes, useLocation, Route } from "react-router-dom";
import MiddlePart from "../../components/MiddlePart/MiddlePart";
import CreateReelsForm from "../../components/Reels/CreateReelsForm";
import Reels from "../../components/Reels/Reels";
import Profile from "../Profile/Profile";

const HomePage = () => {
  const location = useLocation();
  return (
    <div className="px-20">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={3}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
          <Grid
            lg={location.pathname === "/" ? 6 : 9}
            item
            className="px-5 flex justify-center"
            xs={12}
          >
            <Routes>
              <Route path="/" element={<MiddlePart />} />
              <Route path="/reels" element={<Reels />} />
              <Route path="/create-reels" element={<CreateReelsForm />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
