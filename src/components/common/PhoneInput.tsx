"use client";

import React from "react";
import PhoneInputFromLib, { Value } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
}

/**
 * Clean PhoneInput component using `react-phone-number-input`.
 * Displays country flag, dialing code selector, vertical separator, and clean formatted input.
 */
export default function PhoneInput({
  value,
  onChange,
  placeholder = "408-555-7210",
  className = "",
  disabled = false,
  id,
}: PhoneInputProps) {
  return (
    <PhoneInputFromLib
      international
      defaultCountry="US"
      value={value as Value}
      onChange={(val) => onChange(val || "")}
      placeholder={placeholder}
      flags={flags}
      disabled={disabled}
      numberInputProps={id ? { id } : undefined}
      className={`bg-[#F0F0F0] rounded-[12px] px-4 py-3 text-[15px] text-slate outline-none focus-within:ring-2 focus-within:ring-[#856DF3]/20 transition [&_input]:outline-none [&_input]:border-none [&_input]:bg-transparent ${className}`}
    />
  );
}
