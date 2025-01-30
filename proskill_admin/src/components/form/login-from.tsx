"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import loginAction from "./auth-action";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!phoneNumber) {
      newErrors.phone_number = "Phone number is required";
    }
    if (!password) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const data = {
      phone_number: phoneNumber,
      password: password,
    };

    await loginAction(data);

    setIsSubmitting(false);
  };

  return (
    <div className="flex w-full min-h-screen bg-[#e6f0eb] items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm w-full max-w-[880px] flex overflow-hidden">
        <div className="w-1/2 p-[45px] pt-[20px] h-[540px] bg-[#fafafa]">
          <h3 className="text-center font-bold">Sign in</h3>
          <form className="space-y-6 mt-[100px]" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <label className="block text-sm text-gray-600">Login</label>
              <Input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="p-[6px,12px] border border-[#cbd5e1]"
                type="text"
                placeholder="Enter your phone number"
                aria-invalid={!!errors.phone_number}
              />
              {errors.phone_number && (
                <p className="text-red-500 text-sm">{errors.phone_number}</p>
              )}
            </div>
            <div className="space-y-3">
              <label className="block text-sm text-gray-600">Password</label>
              <div className="relative">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="p-[6px,12px] border border-[#cbd5e1] max-h-[40px]"
                  aria-invalid={!!errors.password}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 text-sm text-gray-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <Button
             
              type="submit"
              className="transition-colors mt-[20px] w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
            <div className="text-center mt-4">
              <p className="text-base text-gray-500">
                <Link href="#" className="hover:underline text-[#5a9c79]">
                  Forgot your password?
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="w-1/2 p-12 flex items-center justify-center">
          <Image
            src="/images/loginImage.png"
            alt="login"
            width={540}
            height={540}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
