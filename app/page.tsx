"use client";
import ThreeScene from "@/components/ThreeScene/ThreeScene";
import "./threePage.scss";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

const ThreePage = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ThreeScene />;
      </Suspense>
      {/* <Loader /> */}
    </>
  );
};

export default ThreePage;
