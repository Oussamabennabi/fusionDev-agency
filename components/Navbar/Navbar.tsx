"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-4 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <div 
      className="relative   rounded-full boder border-transparent backdrop-blur-lg dark:bg-black/[.2] dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-4 py-3 "

      >
      <Link href={"#services"}>Services</Link>
      <Link href={"/pricing"}>Pricing</Link>

      </div>
    </div>
  );
}
