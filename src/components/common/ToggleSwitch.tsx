"use client";

import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export default function ToggleSwitch({
  checked,
  onChange,
  label,
  disabled = false,
  className = "",
  ariaLabel = "Toggle switch",
}: ToggleSwitchProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`w-11 h-6 rounded-full transition-colors duration-200 relative p-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand/20 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${checked ? "bg-brand" : "bg-toggle-off"}`}
      >
        <div
          className={`w-5 h-5 rounded-full bg-white shadow-xs transition-transform duration-200 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      {label && (
        <span
          onClick={() => !disabled && onChange(!checked)}
          className={`text-[14px] font-medium text-label select-none cursor-pointer ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
