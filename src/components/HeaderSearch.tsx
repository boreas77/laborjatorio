"use client";

import { useId, useRef, useState } from "react";

export function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  function openSearch() {
    setIsOpen((current) => {
      const next = !current;

      if (!current) {
        window.setTimeout(() => inputRef.current?.focus(), 0);
      }

      return next;
    });
  }

  return (
    <div className={`header-search${isOpen ? " header-search--open" : ""}`}>
      <button
        aria-controls={inputId}
        aria-expanded={isOpen}
        aria-label="Abrir búsqueda"
        className="header-search__toggle"
        onClick={openSearch}
        type="button"
      >
        <SearchIcon />
      </button>
      <form action="/buscar" className="header-search__form" role="search">
        <label className="sr-only" htmlFor={inputId}>
          Buscar en Laborjatorio
        </label>
        <input
          id={inputId}
          name="q"
          placeholder="Buscar..."
          ref={inputRef}
          type="search"
        />
      </form>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
