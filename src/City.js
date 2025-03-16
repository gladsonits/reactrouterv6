import React from "react";
import { useParams } from "react-router";

const City = () => {
  const { city } = useParams();

  console.log(city);

  return <h2>City</h2>;
};

export default City;
