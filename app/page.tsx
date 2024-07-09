"use client";
import EntryDisplay from "@/components/EntryDisplay";
import Cover from "@/components/Cover";
import { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";

export default function Home() {
  const [page, setpage] = useState(0);
  const [entries, setentries] = useState<Entry[]>([]);
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      {page === 0 ? (
        <Cover />
      ) : page <= entries.length ? (
        <EntryDisplay entry={entries[page - 1]} />
      ) : (
        <Button>+</Button>
      )}
      <ButtonGroup>
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
        <Button disabled={true}>{page}</Button>
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
