import React from "react";
import Carousel from "./Carousel/Carousel";
import Category from "./CategoryItems/Category";
import Connect from "./Connect/Connect";
import Featured from "./FeatureItems/Featured";
import Wave from "./Wave/Wave";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Category />
      <Featured />
      <Connect />
      <Wave />
    </div>
  );
};

export default Home;
