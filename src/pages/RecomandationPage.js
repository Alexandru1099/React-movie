import React from "react";
import Recomandation from "../components/Recomandation/Recomandation";
import SimilarMovies from "../components/Recomandation/SimilarMovies";
import { useSelector } from "react-redux/es/exports";
import { Redirect } from "react-router-dom";

const RecomandationPage = () => {
  // const isAuth = useSelector((state) => state.authentication.authentication);
  const isAuth = localStorage.getItem("authentication");
  console.log(isAuth);
  return (
    <section>
      {isAuth === "true" ? <Recomandation /> : <Redirect to="/signup" />}
    </section>
  );
};
export default RecomandationPage;
