import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";

const Recomandation = () => {
  const params = useParams();
  const [data, setData] = useState({});
  console.log(params.id);
  const para = params.id;
  fetch(`http://localhost:3000/article/${para}`, {
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
  return <Navbar />;
};
export default Recomandation;
