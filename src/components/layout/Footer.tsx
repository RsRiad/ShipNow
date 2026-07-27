"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 border-t border-[#E5E5E7] bg-transparent text-[#757575] text-[12px] leading-[16px] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
      {/* Left Links & Copyright */}
      <div className="flex flex-wrap items-center gap-6 font-normal text-[#757575]">
        <span className="text-[#333333] font-semibold">Copyright © 2025 Peterdraw</span>
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#333333] transition">
          Privacy Policy
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#333333] transition">
          Term and conditions
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#333333] transition">
          Contact
        </a>
      </div>

      {/* Right Social Icons */}
      <div className="flex items-center gap-3">
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
