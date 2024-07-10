import React, { useState } from "react";
import { title } from "./primitives";
import { Button } from "@nextui-org/button";
import axios from "axios";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

const AddButton = () => {
  const [key, setkey] = useState(0);
  const createEntry = () => {
    axios
      .post("https://localhost:7073/api/UserApi/PostUser")
      .then(function (response) {
        // handle success
        setkey(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <>
      <div className={title({ color: "pink", size: "lg", padding: "lg" })}>
        𝓝𝓮𝓾𝓮 𝓕𝓻𝓮𝓾𝓷𝓭𝓮 𝓱𝓲𝓷𝔃𝓾𝓯ü𝓰𝓮𝓷? (づ˶•༝•˶)づ♡
      </div>
      <Popover
        placement='bottom'
        showArrow={true}
        color='primary'
        onClose={() => {
          window.location.reload();
        }}
      >
        <PopoverTrigger>
          <Button color='secondary' onClick={createEntry}>
            <div className={title({ color: "pink", size: "sm" })}>♡ 𝓝𝓮𝓾 ♡</div>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className='px-1 py-2'>
            <div className='text-small font-bold'>
              Der Editkey für die neue Seite ist:
            </div>
            <div className='text-tiny'>{key}</div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default AddButton;
