"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Button from "@/components/common/Button";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (val: string) => {
    if (!val.trim()) {
      return "Email address is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val.trim())) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePassword = (val: string) => {
    if (!val) {
      return "Password is required";
    }
    if (val.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (emailError) {
      setEmailError(validateEmail(val));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPassword(val);
    if (passwordError) {
      setPasswordError(validatePassword(val));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const eErr = validateEmail(email);
    const pErr = validatePassword(password);

    setEmailError(eErr);
    setPasswordError(pErr);

    if (eErr || pErr) {
      return;
    }

    setIsSubmitting(true);

    // Simulate session storage
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "shipnow_user_session",
          JSON.stringify({
            email,
            rememberMe,
            loggedInAt: new Date().toISOString(),
          }),
        );
      }
      router.push("/dashboard");
    }, 600);
  };

  return (
    <div className="h-screen max-h-screen w-full flex flex-col lg:flex-row items-stretch bg-card overflow-y-auto lg:overflow-hidden snap-y snap-mandatory scroll-smooth lg:snap-none">
      {/* Left / Top Purple Hero Section */}
      <div className="h-screen min-h-screen lg:min-h-0 w-full lg:w-1/2 bg-brand flex flex-col items-center justify-between px-6 py-4 sm:px-10 lg:px-[clamp(1.5rem,3vw,50px)] lg:py-6 text-card relative lg:h-full lg:overflow-hidden shrink-0 snap-start snap-always">
        {/* Logo */}
        <div className="flex items-center justify-center shrink-0">
          <Image
            src="/Assets/Logo.svg"
            alt="ShipNow Logo"
            width={265}
            height={72}
            priority
            className="h-10 sm:h-12 lg:h-[clamp(40px,5.5vh,64px)] w-auto object-contain"
          />
        </div>

        {/* Hero Graphic - Takes full available vertical space */}
        <div className="relative w-full flex-1 max-w-[420px] sm:max-w-[560px] lg:max-w-[clamp(480px,52vw,640px)] min-h-0 my-1">
          <Image
            src="/Assets/loginPageImage.png"
            alt="ShipNow Logistics"
            fill
            sizes="(max-width: 768px) 560px, 640px"
            priority
            className="object-contain"
          />
        </div>

        {/* Headline */}
        <div className="flex flex-col items-center gap-1 lg:gap-2 text-center max-w-[326px] md:max-w-[487px] shrink-0">
          {/* Heading */}
          <h1 className="font-extrabold text-[32px] sm:text-[40px] leading-[1.15] text-card max-lg:[-webkit-text-stroke:1px_black] max-lg:[paint-order:stroke_fill]">
            Welcome to ShipNow
          </h1>
          {/* Sub Heading */}
          <p className="font-normal text-[14px] sm:text-[16px] leading-[1.25] text-card">
            Manage your shipments, fleet, and warehouse in one smart dashboard.
          </p>
        </div>
      </div>

      {/* Right / Bottom Login Form Section */}
      <div className="h-screen min-h-screen lg:min-h-0 w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-8 sm:px-10 lg:px-[clamp(2rem,4vw,64px)] lg:py-6 bg-card shrink-0 snap-start snap-always overflow-y-auto lg:h-full">
        <div className="w-full max-w-[400px] flex flex-col items-center gap-6 sm:gap-8 my-auto">
          {/* Brand Icon */}
          <Image
            src="/Assets/Icon.svg"
            alt="ShipNow Icon"
            width={40}
            height={40}
            className="h-10 w-10"
          />

          {/* Headline */}
          <div className="flex flex-col items-center gap-2 text-center w-full">
            {/* Heading */}
            <h2 className="font-bold text-[24px] leading-[26px] text-heading">
              Welcome Back
            </h2>
            {/* Sub Heading */}
            <p className="font-normal text-[14px] leading-[18px] text-body">
              Log in to continue managing your logistics with ShipNow
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="w-full flex flex-col gap-8"
          >
            {/* Fields group */}
            <div className="flex flex-col gap-4">
              {/* Email Field */}
              <div className="flex flex-col">
                {/* Title */}
                <label
                  htmlFor="email"
                  className="font-semibold text-[11px] leading-[14px] text-heading pb-1.5 px-px"
                >
                  Email Address
                </label>
                {/* Field */}
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter a valid email address"
                  className={`w-full h-[38px] px-3 py-[9px] rounded-lg border font-normal text-[12px] leading-[16px] text-heading placeholder:text-body outline-none transition duration-150 ${
                    emailError
                      ? "border-red-500 bg-surface focus:ring-2 focus:ring-red-200"
                      : "border-transparent bg-surface focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
                  }`}
                />
                {emailError && (
                  <p className="pt-1 px-px font-normal text-[11px] leading-[14px] text-red-600">
                    {emailError}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="font-semibold text-[11px] leading-[14px] text-heading pb-1.5 px-px"
                >
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Create a strong password"
                    className={`w-full h-[38px] pl-3 pr-10 py-[9px] rounded-lg border font-normal text-[12px] leading-[16px] text-heading placeholder:text-body outline-none transition duration-150 ${
                      passwordError
                        ? "border-red-500 bg-surface focus:ring-2 focus:ring-red-200"
                        : "border-transparent bg-surface focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 text-body hover:text-heading focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="w-[18px] h-[18px]" />
                    ) : (
                      <Eye className="w-[18px] h-[18px]" />
                    )}
                  </button>
                </div>
                {passwordError && (
                  <p className="pt-1 px-px font-normal text-[11px] leading-[14px] text-red-600">
                    {passwordError}
                  </p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-1.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3 h-3 rounded-[3px] border-brand text-brand focus:ring-brand accent-brand"
                  />
                  <span className="font-normal text-[11px] leading-[14px] text-body">
                    Remember Me
                  </span>
                </label>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="font-semibold text-[11px] leading-[11px] text-brand hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Action group */}
            <div className="flex flex-col gap-4">
              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                className="text-[16px] font-semibold leading-[16px] text-card py-3 h-auto rounded-lg"
                leftIcon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : undefined}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>

              {/* Footer Text */}
              <div className="flex items-center justify-center gap-1">
                <span className="font-normal text-[12px] leading-[16px] text-body">
                  Don&apos;t have an account?
                </span>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="font-semibold text-[12px] leading-[12px] text-brand hover:underline"
                >
                  Register
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
