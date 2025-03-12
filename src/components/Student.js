import React from "react";
import { useParams } from "react-router";

export default function Student() {
  const { id } = useParams();
  return (
    <div>
      Student Details
      <p>Id is {id}</p>
    </div>
  );
}
