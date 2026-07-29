"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-6 sm:py-4 px-4 sm:px-6 border-t border-border bg-transparent text-body text-[12px] leading-[16px] flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 shrink-0">
      {/* MOBILE LAYOUT (< sm): 3 Stacked Centered Rows */}
      <div className="flex flex-col items-center justify-center gap-3 w-full sm:hidden text-center">
        {/* Line 1: Copyright */}
        <span className="text-heading font-bold text-[14px] leading-tight">
          Copyright © 2025 Peterdraw
        </span>

        {/* Line 2: Links */}
        <div className="flex items-center justify-center gap-4 text-body text-[13px] font-normal">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-heading transition">
            Privacy Policy
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-heading transition">
            Term and conditions
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-heading transition">
            Contact
          </a>
        </div>

        {/* Line 3: Social Icons */}
        <div className="flex items-center justify-center gap-4 pt-0.5">
          <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()} className="hover:opacity-80 transition">
            <Image src="/Assets/FacebookLogo.svg" alt="Facebook" width={20} height={20} />
          </a>
          <a href="#" aria-label="X" onClick={(e) => e.preventDefault()} className="hover:opacity-80 transition">
            <Image src="/Assets/XLogo.svg" alt="X" width={20} height={20} />
          </a>
          <a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()} className="hover:opacity-80 transition">
            <Image src="/Assets/InstagramLogo.svg" alt="Instagram" width={20} height={20} />
          </a>
          <a href="#" aria-label="YouTube" onClick={(e) => e.preventDefault()} className="hover:opacity-80 transition">
            <Image src="/Assets/YoutubeLogo.svg" alt="YouTube" width={20} height={20} />
          </a>
          <a href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()} className="hover:opacity-80 transition">
            <Image src="/Assets/LinkedinLogo.svg" alt="LinkedIn" width={20} height={20} />
          </a>
        </div>
      </div>

      {/* DESKTOP / TABLET LAYOUT (>= sm): Horizontal Row */}
      <div className="hidden sm:flex flex-wrap items-center gap-6 font-normal text-body">
        <span className="text-heading font-semibold">Copyright © 2025 Peterdraw</span>
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-heading transition">
          Privacy Policy
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-heading transition">
          Term and conditions
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-heading transition">
          Contact
        </a>
      </div>

      <div className="hidden sm:flex items-center gap-3">
        <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()} className="hover:opacity-80 transition">
          <Image src="/Assets/FacebookLogo.svg" alt="Facebook" width={20} height={20} />
        </a>
        <a href="#" aria-label="X" onClick={(e) => e.preventDefault()} className="hover:opacity-80 transition">
          <Image src="/Assets/XLogo.svg" alt="X" width={20} height={20} />
        </a>
        <a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()} className="hover:opacity-80 transition">
          <Image src="/Assets/InstagramLogo.svg" alt="Instagram" width={20} height={20} />
        </a>
        <a href="#" aria-label="YouTube" onClick={(e) => e.preventDefault()} className="hover:opacity-80 transition">
          <Image src="/Assets/YoutubeLogo.svg" alt="YouTube" width={20} height={20} />
        </a>
        <a href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()} className="hover:opacity-80 transition">
          <Image src="/Assets/LinkedinLogo.svg" alt="LinkedIn" width={20} height={20} />
        </a>
      </div>
    </footer>
  );
}
