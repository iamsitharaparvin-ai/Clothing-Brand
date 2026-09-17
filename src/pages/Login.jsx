import { useState } from "react";
import { Link, useLocation } from "wouter";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [, setLocation] = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();

    setLocation("/home");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/image/login.png')",
      }}
    >
      <div className="absolute inset-0 bg-pink-100/40"></div>

      <div className="relative z-10 w-full max-w-md">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl  text-[#A85D35] tracking-wide font-bold">
            LILUX
          </h1>

          <p className="text-gray-700 mt-2">
            Welcome back! Please login to your account.
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm border border-white rounded-2xl shadow-xl p-8">
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Login
          </h2>

          <form onSubmit={handleLogin}>
            
            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-16 border border-gray-300 rounded-lg outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#A85D35]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember and Forgot Password */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="accent-pink-500"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-sm text-[#A85D35] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#A85D35] hover:bg-pink-600 text-white py-3 rounded-lg font-medium transition"
            >
              Login
            </button>

          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="text-sm text-gray-500">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <button
            type="button"
            className="w-full border border-gray-300 bg-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-700 mt-6">
            Don't have an account?{" "}

            <Link
              href="/register"
              className="text-[#A85D35] font-medium hover:underline"
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;