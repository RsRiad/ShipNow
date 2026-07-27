"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";

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
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#fefefe] overflow-x-hidden">
      {/* Left / Top Purple Hero Section — Figma: bg #856DF3, gap 42, pad 106 (desktop) */}
      <div className="w-full lg:w-1/2 bg-[#856DF3] flex flex-col items-center justify-center gap-[42px] px-8 py-16 md:p-[106px] lg:p-[106px] text-[#fefefe] relative">
        {/* Logo — Figma: 176x48 (mobile) / 265x72 (tablet+desktop) */}
        <div className="flex items-center justify-center">
          <Image
            src="/Assets/Logo.svg"
            alt="ShipNow Logo"
            width={265}
            height={72}
            priority
            className="h-12 md:h-[72px] w-auto object-contain"
          />
        </div>

        {/* Hero Graphic — Figma: 553x499 */}
        <div className="relative w-full max-w-[326px] md:max-w-[553px] aspect-[553/499] rounded-2xl overflow-hidden">
          <Image
            src="/Assets/loginPageImage.png"
            alt="ShipNow Logistics"
            fill
            sizes="(max-width: 768px) 326px, 553px"
            priority
            className="object-cover"
          />
        </div>

        {/* Headline — Figma: gap 12, centered, max-w 326 (mobile) / 487 (tablet+desktop) */}
        <div className="flex flex-col items-center gap-3 text-center max-w-[326px] md:max-w-[487px]">
          {/* Heading: Nunito Sans 800, 40px, lh 44 (mobile has 1px black stroke) */}
          <h1 className="font-extrabold text-[40px] leading-[44px] text-[#fefefe] max-md:[-webkit-text-stroke:1px_black] max-md:[paint-order:stroke_fill]">
            Welcome to ShipNow
          </h1>
          {/* Sub Heading: Nunito Sans 400, 16px, lh 20 */}
          <p className="font-normal text-[16px] leading-[20px] text-[#fefefe]">
            Manage your shipments, fleet, and warehouse in one smart dashboard.
          </p>
        </div>
      </div>

      {/* Right / Bottom Login Form Section — Figma: gap 32, content width 400, pad 120 */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:min-h-screen px-8 py-[120px] lg:py-0 bg-[#fefefe]">
        <div className="w-full max-w-[400px] flex flex-col items-center gap-8">
          {/* Brand Icon — Figma: 40x40 */}
          <Image
            src="/Assets/Icon.svg"
            alt="ShipNow Icon"
            width={40}
            height={40}
            className="h-10 w-10"
          />

          {/* Headline — Figma: gap 8, centered */}
          <div className="flex flex-col items-center gap-2 text-center w-full">
            {/* Heading: Nunito Sans 700, 24px, lh 26, #333333 */}
            <h2 className="font-bold text-[24px] leading-[26px] text-[#333333]">
              Welcome Back
            </h2>
            {/* Sub Heading: Nunito Sans 400, 14px, lh 18, #757575 */}
            <p className="font-normal text-[14px] leading-[18px] text-[#757575]">
              Log in to continue managing your logistics with ShipNow
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="w-full flex flex-col gap-8"
          >
            {/* Fields group — Figma: gap 16 */}
            <div className="flex flex-col gap-4">
              {/* Email Field */}
              <div className="flex flex-col">
                {/* Title: Nunito Sans 600, 11px, lh 14, #333333, mb 6 */}
                <label
                  htmlFor="email"
                  className="font-semibold text-[11px] leading-[14px] text-[#333333] pb-1.5 px-px"
                >
                  Email Address
                </label>
                {/* Field: pad 9/12, radius 8, bg #F5F5F5, h 38 */}
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter a valid email address"
                  className={`w-full h-[38px] px-3 py-[9px] rounded-lg border font-normal text-[12px] leading-[16px] text-[#333333] placeholder:text-[#757575] outline-none transition duration-150 ${
                    emailError
                      ? "border-red-500 bg-[#f5f5f5] focus:ring-2 focus:ring-red-200"
                      : "border-transparent bg-[#f5f5f5] focus:border-[#856DF3] focus:bg-white focus:ring-2 focus:ring-[#856DF3]/20"
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
                  className="font-semibold text-[11px] leading-[14px] text-[#333333] pb-1.5 px-px"
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
                    className={`w-full h-[38px] pl-3 pr-10 py-[9px] rounded-lg border font-normal text-[12px] leading-[16px] text-[#333333] placeholder:text-[#757575] outline-none transition duration-150 ${
                      passwordError
                        ? "border-red-500 bg-[#f5f5f5] focus:ring-2 focus:ring-red-200"
                        : "border-transparent bg-[#f5f5f5] focus:border-[#856DF3] focus:bg-white focus:ring-2 focus:ring-[#856DF3]/20"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 text-[#757575] hover:text-[#333333] focus:outline-none"
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

              {/* Remember Me & Forgot Password — Figma: Remember 11px #757575, Forgot 11px 600 #856DF3 */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-1.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3 h-3 rounded-[3px] border-[#856DF3] text-[#856DF3] focus:ring-[#856DF3] accent-[#856DF3]"
                  />
                  <span className="font-normal text-[11px] leading-[14px] text-[#757575]">
                    Remember Me
                  </span>
                </label>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="font-semibold text-[11px] leading-[11px] text-[#856DF3] hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Action group — Figma: gap 16 */}
            <div className="flex flex-col gap-4">
              {/* Button CTA — Figma: pad 12/18, radius 8, bg #333333, 16px 600, h 44 */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-[18px] bg-[#333333] hover:bg-[#1f1f1f] active:bg-black disabled:opacity-75 text-[#fefefe] font-semibold text-[16px] leading-[16px] rounded-lg transition duration-150 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Logging in...</span>
                  </>
                ) : (
                  <span>Login</span>
                )}
              </button>

              {/* Footer Text — Figma: 12px #757575 + Register 12px 600 #856DF3 */}
              <div className="flex items-center justify-center gap-1">
                <span className="font-normal text-[12px] leading-[16px] text-[#757575]">
                  Don&apos;t have an account?
                </span>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="font-semibold text-[12px] leading-[12px] text-[#856DF3] hover:underline"
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
