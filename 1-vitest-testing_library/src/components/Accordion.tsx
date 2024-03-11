import React, { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export function Accordion({ title, children }: AccordionProps) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const arrow = show ? "▼" : "→";
  return (
    <section style={{ background: "white", color: "black", padding: "5px" }}>
      <header onClick={handleClick} style={{ cursor: "pointer" }}>
        <h2>{`${arrow} ${title}`}</h2>
      </header>
      {show && <article>{children}</article>}
    </section>
  );
}
