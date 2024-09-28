import { Card, Grid2 } from "@mui/material";
import React from "react";
import Login from "./Login";
import Register from "./Register";

const Authentication = () => {
  return (
    <div className="relative h-screen">
      <Grid2 container>
        <Grid2 className="h-screen overflow-hidden" item xs={12}>
          <img
            className="h-full w-full object-cover"
            src="https://img.freepik.com/free-photo/elevated-view-various-mobile-icons-plywood_23-2147841381.jpg?t=st=1727519834~exp=1727523434~hmac=2c1cdf96b289d6f42853e45226ad351f97675bb1415eccc5c06652d67d61d899&w=740"
            alt="Instashare HomePage"
          />
        </Grid2>

        {/* Overlap the login box */}
        <div className="absolute inset-y-0 right-0 flex items-center justify-center w-1/2 h-full px-20">
          <Card className="card p-8 w-full max-w-md">
            <div className="flex flex-col items-center mb-5 space-y-1">
              <h1 className="logo text-center">InstaShare</h1>
              <p className="text-center text-sm">
                Connecting People Seamlessly
              </p>
            </div>
            {/* <Login /> */}
            <Register />
          </Card>
        </div>
      </Grid2>
    </div>
  );
};

export default Authentication;
