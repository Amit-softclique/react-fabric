import React, { useState, useEffect, useRef } from "react";
import { fabric } from "fabric";

const Home = () => {
  const [count, setCount] = useState(0);
  const [counterStart, setCounterStart] = useState(false);
  const [canvas, setCanvas] = useState();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      // Add any Fabric.js options here
      width: 800,
      height: 800,
    });

    // Example: Adding a circle to the canvas
    const circle = new fabric.Circle({
      radius: 20,
      fill: 'red',
      left: 200,
      top: 100,
    });
    canvas.add(circle);

    // Clean up Fabric.js instance on unmount
    return () => {
      canvas.dispose();
    };
  }, []);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 800,
      width: 800,
      backgroundColor: "pink",
    });

  useEffect(() => {
    let timer: any;
    if (counterStart) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [counterStart]);


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
