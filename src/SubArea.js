import React from "react";
import { useParams } from "react-router";

const SubArea = () => {
  const { "*": subarea } = useParams();

  console.log(subarea);

  return (
    <div>
      <h3>Sub Area</h3>
    </div>
  );
};

export default SubArea;
