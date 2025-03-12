import React, { useEffect, useState } from "react";
import useToggle from "../common/useToggle";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  // Custom Hook
  const [value, toggle] = useToggle(false);

  return (
    <div style={{ textAlign: "center" }}>
      <p>Hello Ur Welcome Here</p>

      <p>Hi i am {value ? <span>Shubham</span> : <span>*******</span>}</p>

      <button onClick={() => toggle(false)}>Hide Name</button>
      <button onClick={() => toggle(true)}>Show Name</button>
      <button onClick={toggle}>Toggle </button>
    </div>
  );
}
