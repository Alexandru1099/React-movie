import React from "react";
import Navbar from "../components/navbar";
import ListMovie from "../components/ListMovie";
import WatchList from "../components/WatchList/WatchList";
import { useSelector } from "react-redux/es/exports";

const Home = () => {
  const { store } = useSelector((state) => state.authentication.authentication);
  return (
    <div className="home">
      <p>{store}</p>
      <Navbar />
      <ListMovie />
      <WatchList />
    </div>
  );
};
export default Home;
