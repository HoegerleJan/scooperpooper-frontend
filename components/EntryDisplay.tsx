import React, { useState } from "react";
import { title } from "./primitives";
import { Input } from "@nextui-org/input";
import axios, { AxiosHeaders } from "axios";
import { Button, ButtonGroup } from "@nextui-org/button";
interface EntryDisplayProps {
  entry: Entry;
}

const EntryDisplay = ({ entry }: EntryDisplayProps) => {
  const [isEditmode, setEditmode] = useState(false);
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
        if (response.status == 200) {
          setEditmode(false);
          window.location.reload();
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const deleteEntry = () => {
    axios
      .delete(
        "https://localhost:7073/api/EntryApi/DeleteEntry/" +
          entry.id +
          "?editkey=" +
          editkey
      )
      .then(function (response) {
        // handle success
        console.log(response.data);
        if (response.status == 200) {
          setEditmode(false);
          window.location.reload();
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const verifyKey = () => {
    if (editkey === undefined || editkey < 1000) {
      return;
    }
    axios
      .put(
        "https://localhost:7073/api/EntryApi/PutEntry?editkey=" + editkey,
        entry
      )
      .then(function (response) {
        // handle success
        if (response.status == 200) {
          setEditmode(true);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <>
      <div className={title({ color: "pink", size: "sm" })}>ε(´｡•᎑•`)っ 💕</div>
      <div className={title({ color: "pink", size: "sm" })}>
        <span>Vorname: </span>
        {isEditmode ? (
          <Input
            defaultValue={entry.first_name}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
        ) : (
          <span className={title({ color: "violet", size: "sm" })}>
            {entry.first_name}
          </span>
        )}
      </div>
      <div className={title({ color: "pink", size: "sm" })}>
        <span>Nachname: </span>
        {isEditmode ? (
          <Input
            disabled={!isEditmode}
            defaultValue={entry.last_name}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
        ) : (
          <span className={title({ color: "violet", size: "sm" })}>
            {entry.last_name}
          </span>
        )}
      </div>
      <div className={title({ color: "pink", size: "sm" })}>
        <span>Spitzname: </span>
        {isEditmode ? (
          <Input
            disabled={!isEditmode}
            defaultValue={entry.nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        ) : (
          <span className={title({ color: "violet", size: "sm" })}>
            {entry.nickname}
          </span>
        )}
      </div>
      <ButtonGroup>
        <Input
          disabled={isEditmode}
          onChange={(e) => {
            setEditkey(Number(e.target.value));
          }}
        />
        {isEditmode ? (
          <>
            <Button color='secondary' onClick={deleteEntry}>
              <div>♡ Delete ♡</div>
            </Button>
            <Button color='secondary' onClick={updateCard}>
              <div>♡ Save ♡</div>
            </Button>
          </>
        ) : (
          <Button color='secondary' onClick={verifyKey}>
            <div>♡ Edit ♡</div>
          </Button>
        )}
      </ButtonGroup>
    </>
  );
};

export default EntryDisplay;
