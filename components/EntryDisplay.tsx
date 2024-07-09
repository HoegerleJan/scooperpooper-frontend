import React, { useState } from "react";
import { title } from "./primitives";
import { Input } from "@nextui-org/input";
import axios from "axios";
import { Button } from "@nextui-org/button";
interface EntryDisplayProps {
  entry: Entry;
}

const EntryDisplay = ({ entry }: EntryDisplayProps) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [nickname, setNickname] = useState("");
  const [editkey, setEditkey] = useState(0);

  const updateCard = () => {
    const newEntry: Entry = {
      id: entry.id,
      user_Id: entry.user_Id,
      first_name: firstname,
      last_name: lastname,
      nickname: nickname,
    };
    axios
      .put(
        "https://localhost:7073/api/EntryApi/PutEntry?editkey=" + editkey,
        newEntry
      )
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <>
      <div className={title({ color: "pink", size: "sm" })}>ε(´｡•᎑•`)っ 💕</div>
      <div className={title({ color: "pink", size: "sm", padding: "lg" })}>
        <div>Vorname: </div>
        <Input
          defaultValue={entry.first_name}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
      </div>
      <div className={title({ color: "pink", size: "sm", padding: "lg" })}>
        <div>Nachname: </div>
        <Input
          defaultValue={entry.last_name}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
      </div>
      <div className={title({ color: "pink", size: "sm", padding: "lg" })}>
        <div>Spitzname: </div>
        <Input
          defaultValue={entry.nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default EntryDisplay;
