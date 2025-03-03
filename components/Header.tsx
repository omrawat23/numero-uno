"use client"

import React from "react";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

const navigationItems = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Services", href: "#services" },
  { text: "Pricing", href: "#pricing" },
];

export function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header fixed left-0 right-0 top-0 z-50 backdrop-blur-sm pt-4">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]">
        <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="justify-self-start">
          <Logo className="text-brand-purple ~h-12/20" />
        </a>
        <nav
          aria-label="Main"
          className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
        >
          <ul className="flex flex-wrap items-center justify-center gap-8 text-white">
            {navigationItems.map((item) => (
              <li key={item.text}>
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="~text-lg/xl transition-all duration-200 hover:border-b-2 hover:border-yellow-400"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="justify-self-end">
          <ButtonLink href="" icon="cart" color="purple" aria-label="Cart (1)">
            <span className="md:hidden">1</span>
            <span className="hidden md:inline">Book</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
