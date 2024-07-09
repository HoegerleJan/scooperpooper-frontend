"use client";
import EntryDisplay from "@/components/EntryDisplay";
import Cover from "@/components/Cover";
import { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import AddButton from "@/components/AddButton";
import axios from "axios";

export default function Home() {
  const [page, setpage] = useState(0);
  const [entries, setentries] = useState<Entry[]>([]);

  useEffect(() => {
    axios
      .get<Entry[]>("https://localhost:7073/api/EntryApi/GetEntries")
      .then(function (response) {
        // handle success
        setentries(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      {page === 0 ? (
        <Cover />
      ) : page <= entries.length ? (
        <EntryDisplay entry={entries[page - 1]} />
      ) : (
        <AddButton />
      )}
      <ButtonGroup color='secondary'>
        <Button
          onClick={() => {
            if (page >= 0) {
              setpage(page - 1);
            }
          }}
          disabled={page === 0}
        >
          {"<<"}
        </Button>
        <Button disabled={true} disableAnimation={true}>
          {page + "/" + (entries.length + 1)}{" "}
        </Button>
        <Button
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
