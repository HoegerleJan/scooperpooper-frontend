import React from "react";
import { title } from "./primitives";
import { Button } from "@nextui-org/button";

const AddButton = () => {
  return (
    <>
      <div className={title({ color: "pink", size: "lg", padding: "lg" })}>
        𝓝𝓮𝓾𝓮 𝓕𝓻𝓮𝓾𝓷𝓭𝓮 𝓱𝓲𝓷𝔃𝓾𝓯ü𝓰𝓮𝓷? (づ˶•༝•˶)づ♡
      </div>
      <Button color='secondary'>
        <div className={title({ color: "pink", size: "sm" })}>♡ 𝓝𝓮𝓾 ♡</div>
      </Button>
    </>
  );
};

export default AddButton;
