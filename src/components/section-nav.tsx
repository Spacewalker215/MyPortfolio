"use client";

import { useEffect, useState } from "react";

const sections = [
  ["about", "About"],
  ["work", "Work"],
  ["archive", "Archive"],
  ["whats-next", "What's next"],
] as const;

export function SectionNav() {
  const [current, setCurrent] = useState("about");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const threshold = window.innerHeight * 0.3;
      let active: string = "about";
      for (const [id] of sections) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= threshold) active = id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        active = "whats-next";
      }
      setCurrent(active);
      frame = 0;
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className="section-nav" aria-label="Sections">
      {sections.map(([id, label]) => (
        <a key={id} href={`#${id}`} aria-current={current === id ? "location" : undefined}>
          {label}
        </a>
      ))}
    </nav>
  );
}
