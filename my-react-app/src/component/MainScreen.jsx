import React from "react";
import "./MainScreen.css";
import Header from "./Header";
import PopularExperiences from "./PopularExperiences";
import AllServices from "./AllServices";
import PointsRewards from "./PointsRewards";
import BottomNavigation from "./BottomNavigation";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <Header />
      <PopularExperiences />
      <AllServices />
      <PointsRewards />
      <BottomNavigation />
    </div>
  );
};

export default MainScreen;