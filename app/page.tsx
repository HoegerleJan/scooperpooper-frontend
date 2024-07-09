"use client";
import EntryDisplay from "@/components/EntryDisplay";
import Cover from "@/components/Cover";
import { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import AddButton from "@/components/AddButton";

export default function Home() {
  const [page, setpage] = useState(0);
  const example: Entry = {
    id: 1,
    user_Id: 1,
    first_name: "Jan",
    last_name: "Högerle",
    nickname: "Doulrion",
  };
  const [entries, setentries] = useState<Entry[]>([example]);
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      {page === 0 ? (
        <Cover />
      ) : page <= entries.length ? (
        <EntryDisplay entry={entries[page - 1]} />
      ) : (
        <AddButton />
      )}
      <ButtonGroup>
        <Button color="secondary"
          onClick={() => {
            if (page >= 0) {
              setpage(page - 1);
            }
          }}
          disabled={page === 0}
        >
          {"<<"}
        </Button>
        <Button disabled={true} disableAnimation={true} color="secondary">
          {page + "/" + (entries.length + 1)}{" "}
        </Button>
        <Button color="secondary"
          onClick={() => {
            if (page <= entries.length) {
              setpage(page + 1);
            }
          }}
          disabled={page > entries.length}
        >
          {">>"}
        </Button>
      </ButtonGroup>
    </section>
  );
}
