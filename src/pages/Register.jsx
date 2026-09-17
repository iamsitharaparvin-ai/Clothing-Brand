import { useState } from "react";
import { Link, useLocation } from "wouter";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [, setLocation] = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    setLocation("/home");
  };

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center overflow-y-auto bg-cover bg-center bg-no-repeat px-3 py-6 sm:px-6 sm:py-8"
      style={{
        backgroundImage: "url('/image/login.png')",
      }}
    >
      <div className="absolute inset-0 bg-pink-100/30"></div>

      <div className="relative z-10 w-full max-w-[400px]">

        <div className="mb-4 text-center sm:mb-5">
          <h1 className="text-3xl font-bold tracking-wider text-[#A85D35] sm:text-4xl">
            LILUX
          </h1>

          <p className="mt-1 text-xs text-gray-700 sm:text-sm">
            Create your account and start shopping!
          </p>
        </div>

        <div className="rounded-2xl border border-white/80 bg-white/90 px-5 py-5 shadow-xl backdrop-blur-sm sm:px-7 sm:py-6">

          <h2 className="mb-4 text-xl font-semibold text-gray-800 sm:mb-5 sm:text-2xl">
            Create Account
          </h2>

          <form onSubmit={handleRegister}>

            <div className="mb-3.5">
              <label className="mb-1 block text-xs font-medium text-gray-700 sm:text-sm">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                required
                className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm outline-none transition focus:border-[#A85D35] focus:ring-1 focus:ring-[#A85D35] sm:h-11"
              />
            </div>

            <div className="mb-3.5">
              <label className="mb-1 block text-xs font-medium text-gray-700 sm:text-sm">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                required
                className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm outline-none transition focus:border-[#A85D35] focus:ring-1 focus:ring-[#A85D35] sm:h-11"
              />
            </div>

            <div className="mb-3.5">
              <label className="mb-1 block text-xs font-medium text-gray-700 sm:text-sm">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  required
                  className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 pr-14 text-sm outline-none transition focus:border-[#A85D35] focus:ring-1 focus:ring-[#A85D35] sm:h-11"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#A85D35]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="mb-3.5">
              <label className="mb-1 block text-xs font-medium text-gray-700 sm:text-sm">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  required
                  className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3 pr-14 text-sm outline-none transition focus:border-[#A85D35] focus:ring-1 focus:ring-[#A85D35] sm:h-11"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-[#A85D35]"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <label className="mb-4 flex items-start gap-2 text-[11px] leading-4 text-gray-600 sm:text-xs">
              <input
                type="checkbox"
                required
                className="mt-0.5 shrink-0 accent-[#A85D35]"
              />

              <span>
                I agree to the Terms & Conditions and Privacy Policy
              </span>
            </label>

            <button
              type="submit"
              className="h-10 w-full rounded-lg bg-[#A85D35] text-sm font-medium text-white transition duration-300 hover:bg-[#8f4d2b] sm:h-11"
            >
              Create Account
            </button>
          </form>

          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300"></div>

            <span className="text-xs text-gray-500">
              OR
            </span>

            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <button
            type="button"
            className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white text-sm transition hover:bg-gray-50 sm:h-11"
          >
            <FcGoogle size={19} />
            Continue with Google
          </button>

          <p className="mt-4 text-center text-xs text-gray-700 sm:text-sm">
            Already have an account?{" "}

            <Link
              href="/login"
              className="font-medium text-[#A85D35] hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;
