import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SelectMovie from "../components/SelectMovie";
import WatchList from "../components/WatchList";

const SelectMoviePage = () => {
  const params = useParams();
  const [data, setData] = useState({});
  // const isAuth = useSelector(state => state.auth.authentication)
  fetch(`http://localhost:3000/article/${params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = "Authentication failed!";
          // if (data && data.error && data.error.message) {
          //   errorMessage = data.error.message;
          // }

          throw new Error(errorMessage);
        });
      }
    })
    .then((data) => {
      // setData(data);
      // authCtx.login(data.idToken, expirationTime.toISOString());
      // history.replace('/');
    })
    .catch((err) => {
      alert(err.message);
    });
  return (
    <div>
      <Navbar />
      <SelectMovie />
      <WatchList />
    </div>
  );
};
export default SelectMoviePage;
