"use client";

import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = document.querySelectorAll<HTMLElement>("[data-scroll-reveal]");
    const workflowRows = Array.from(document.querySelectorAll<HTMLElement>("[data-workflow-row]"));

    if (reduce) {
      revealTargets.forEach((element) => element.classList.add("is-visible"));
      workflowRows.forEach((row) => row.classList.add("is-visible"));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8%" });

    revealTargets.forEach((element) => revealObserver.observe(element));

    const visibleRows = new Set<HTMLElement>();
    const workflowObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const row = entry.target as HTMLElement;
        if (entry.isIntersecting) visibleRows.add(row);
        else visibleRows.delete(row);
      });

      const viewportCenter = window.innerHeight / 2;
      const activeRow = Array.from(visibleRows).sort((a, b) => {
        const aBox = a.getBoundingClientRect();
        const bBox = b.getBoundingClientRect();
        return Math.abs(aBox.top + aBox.height / 2 - viewportCenter) - Math.abs(bBox.top + bBox.height / 2 - viewportCenter);
      })[0];
      workflowRows.forEach((row) => row.classList.toggle("is-active", row === activeRow));

      const active = workflowRows.indexOf(activeRow);
      workflowRows.forEach((row, index) => row.classList.toggle("is-complete", active > index));
    }, { threshold: 0.55, rootMargin: "-36% 0px -36%" });

    workflowRows.forEach((row) => workflowObserver.observe(row));

    return () => {
      revealObserver.disconnect();
      workflowObserver.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
