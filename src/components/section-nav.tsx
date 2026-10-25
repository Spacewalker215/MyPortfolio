"use client";

import { useEffect, useState } from "react";
import { sections } from "@/lib/sections";

const navigation = Object.values(sections);

export function SectionNav() {
  const [current, setCurrent] = useState<string>(sections.about.id);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const threshold = window.innerHeight * 0.3;
      let active: string = sections.about.id;
      for (const { id } of navigation) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= threshold) active = id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        active = sections.next.id;
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
      {navigation.map(({ id, title }) => (
        <a key={id} href={`#${id}`} aria-current={current === id ? "location" : undefined}>
          {title}
        </a>
      ))}
    </nav>
  );
}
