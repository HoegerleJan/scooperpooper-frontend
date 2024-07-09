import React from "react";
interface EntryDisplayProps {
  entry: Entry;
}

const EntryDisplay = ({ entry }: EntryDisplayProps) => {
  return (
    <>
      <div>{entry.id}</div>
      <div>
        {entry.first_name + "[" + entry.nickname + "]" + entry.last_name}
      </div>
    </>
  );
};

export default EntryDisplay;
