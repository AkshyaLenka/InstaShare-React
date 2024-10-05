import { Card, Grid } from "@mui/material";
import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";

const Authentication = () => {
  return (
    <div className="relative h-screen w-screen">
      <Grid container>
        {/* Background Image Grid */}
        <Grid item xs={12} className="relative h-screen">
          <img
            className="absolute top-0 left-0 h-full w-full object-cover"
            src="https://img.freepik.com/premium-vector/beach-view-with-silhouettes-coconut-trees-shades-blue_621174-1719.jpg?w=826"
            alt="Instashare HomePage"
          />
        </Grid>

        {/* Card with Form */}
        <div className="absolute inset-y-0 right-0 flex items-center justify-center w-1/2 h-full px-20">
          <Card className="card p-8 w-full max-w-md">
            <div className="flex flex-col items-center mb-5 space-y-1">
              <h1 className="logo text-center">InstaShare</h1>
              <p className="text-center text-sm">
                Connecting People Seamlessly
              </p>
            </div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>

            {/* <Register /> */}
          </Card>
        </div>
      </Grid>
    </div>
  );
};

export default Authentication;
