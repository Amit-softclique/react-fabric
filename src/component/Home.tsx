import React, { useState, useEffect, useRef } from "react";
import { fabric } from "fabric";

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 800,
    });

    const circle = new fabric.Circle({
      radius: 20,
      fill: 'red',
      left: 200,
      top: 100,
    });
    canvas.add(circle);

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Fabric.js on React</h1>
        <canvas ref={canvasRef} />
      </div>
    </>
  );
};

export default Home;
