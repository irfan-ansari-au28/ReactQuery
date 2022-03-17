import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes1"); // return promise
};
const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error} = useQuery("super-heroes", fetchSuperHeroes);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError){
      return<h1>{error.message}</h1>
  }
  return (
    <>
      <h1>RQSuperHeroesPage</h1>
      {data?.data.map((hero) => {
        return <p key={hero.id}>{hero.name}</p>;
      })}
    </>
  );
};

export default RQSuperHeroesPage;
