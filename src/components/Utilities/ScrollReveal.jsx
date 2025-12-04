"use client";

import { useEffect } from "react";

export default function RevealOnScroll() {
    useEffect(() => {
        const elements = document.querySelectorAll(".anime-reveal");

        if (!elements.length) return;

        const reveal = () => {
            elements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 80) {
                    el.classList.add("show");
                }
            });
        };

        reveal();
        window.addEventListener("scroll", reveal);
        return () => window.removeEventListener("scroll", reveal);
    }, []);

    return null;
}
