import React from "react";
import { title } from "./primitives";
interface EntryDisplayProps {
  entry: Entry;
}

const EntryDisplay = ({ entry }: EntryDisplayProps) => {
  return (
    <>
      <div className={title({ color: "pink", size: "sm"  })}>ε(´｡•᎑•`)っ 💕</div>
      <div className={title({ color: "pink", size: "sm", padding: "lg"})}>
        {entry.first_name + "[" + entry.nickname + "]" + entry.last_name}
        </div>
    </>
  );
};

export default EntryDisplay;
