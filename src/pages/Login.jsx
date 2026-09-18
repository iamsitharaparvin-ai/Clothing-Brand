import { useState } from "react";
import { Link, useLocation } from "wouter";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [, setLocation] = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [showForgot, setShowForgot] = useState(false);
  const [forgotStep, setForgotStep] = useState(1);

  const [forgotEmail, setForgotEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] =
    useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (email.trim() === "" || password === "") {
      setErrorMessage("Please enter your email and password.");
      return;
    }

    const storedUser = sessionStorage.getItem("liluxUser");

    if (!storedUser) {
      setErrorMessage(
        "No account found. Please register first."
      );
      return;
    }

    let user;

    try {
      user = JSON.parse(storedUser);
    } catch (error) {
      sessionStorage.removeItem("liluxUser");

      setErrorMessage(
        "Something went wrong. Please register again."
      );

      return;
    }

    if (
      email.trim().toLowerCase() !==
      user.email.trim().toLowerCase()
    ) {
      setErrorMessage("Invalid email or password.");
      return;
    }

    if (password !== user.password) {
      setErrorMessage("Invalid email or password.");
      return;
    }


    const loggedInUser = {
      name: user.name,
      email: user.email,
    };

    sessionStorage.setItem(
      "liluxLoggedIn",
      JSON.stringify(loggedInUser)
    );

    setSuccessMessage("Login successful!");

    setTimeout(() => {
      setLocation("/home");
    }, 700);
  };

  // =========================================================
  // FORGOT PASSWORD - CHECK EMAIL
  // =========================================================
  const handleForgotEmail = (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (forgotEmail.trim() === "") {
      setErrorMessage("Please enter your email address.");
      return;
    }

    const storedUser = sessionStorage.getItem("liluxUser");

    if (!storedUser) {
      setErrorMessage(
        "No account found with this email address."
      );
      return;
    }

    let user;

    try {
      user = JSON.parse(storedUser);
    } catch (error) {
      setErrorMessage(
        "Something went wrong. Please try again."
      );
      return;
    }

    // Check registered email
    if (
      forgotEmail.trim().toLowerCase() !==
      user.email.trim().toLowerCase()
    ) {
      setErrorMessage(
        "No account found with this email address."
      );
      return;
    }

    setForgotStep(2);
  };

  
  const handleResetPassword = (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (newPassword === "" || confirmNewPassword === "") {
      setErrorMessage("Please enter your new password.");
      return;
    }

    if (newPassword.length < 6) {
      setErrorMessage(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const storedUser = sessionStorage.getItem("liluxUser");

    if (!storedUser) {
      setErrorMessage(
        "Unable to reset password. Please register again."
      );
      return;
    }

    let user;

    try {
      user = JSON.parse(storedUser);
    } catch (error) {
      setErrorMessage(
        "Something went wrong. Please try again."
      );
      return;
    }

    // Update password
    const updatedUser = {
      ...user,
      password: newPassword,
    };

    sessionStorage.setItem(
      "liluxUser",
      JSON.stringify(updatedUser)
    );

    setSuccessMessage(
      "Password reset successful. Please login."
    );

    setNewPassword("");
    setConfirmNewPassword("");

    setTimeout(() => {
      setShowForgot(false);
      setForgotStep(1);
      setForgotEmail("");
      setSuccessMessage("");
      setErrorMessage("");
    }, 1500);
  };

  
  const openForgotPassword = () => {
    setShowForgot(true);
    setForgotStep(1);

    setForgotEmail("");
    setNewPassword("");
    setConfirmNewPassword("");

    setErrorMessage("");
    setSuccessMessage("");
  };

 
  const backToLogin = () => {
    setShowForgot(false);
    setForgotStep(1);

    setForgotEmail("");
    setNewPassword("");
    setConfirmNewPassword("");

    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{
        backgroundImage: "url('/image/login.png')",
      }}
    >
      <div className="absolute inset-0 bg-pink-100/40"></div>

      <div className="relative z-10 w-full max-w-md">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-wide text-[#A85D35]">
            LILUX
          </h1>

          <p className="mt-2 text-gray-700">
            {showForgot
              ? "Reset your password"
              : "Welcome back! Please login to your account."}
          </p>
        </div>

      

        {showForgot ? (
          <div className="rounded-2xl border border-white bg-white/95 p-8 shadow-xl backdrop-blur-sm">

            <button
              type="button"
              onClick={backToLogin}
              className="mb-5 text-sm font-medium text-[#A85D35] hover:underline"
            >
              ← Back to Login
            </button>

            <h2 className="text-2xl font-semibold text-gray-800">
              Forgot Password?
            </h2>

            

            {forgotStep === 1 && (
              <>
                <p className="mb-6 mt-2 text-sm leading-6 text-gray-500">
                  Enter your registered email address to reset
                  your password.
                </p>

                {errorMessage && (
                  <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleForgotEmail}>

                  <div className="mb-6">
                    <label
                      htmlFor="forgotEmail"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>

                    <input
                      id="forgotEmail"
                      type="email"
                      value={forgotEmail}
                      onChange={(e) =>
                        setForgotEmail(e.target.value)
                      }
                      placeholder="Enter your registered email"
                      autoComplete="email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#A85D35] focus:ring-1 focus:ring-[#A85D35]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#A85D35] py-3 font-medium text-white transition hover:bg-[#8f4d2d]"
                  >
                    Continue
                  </button>
                </form>
              </>
            )}

           

            {forgotStep === 2 && (
              <>
                <p className="mb-6 mt-2 text-sm leading-6 text-gray-500">
                  Create a new password for your LILUX account.
                </p>

                {/* Error */}
                {errorMessage && (
                  <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    {errorMessage}
                  </div>
                )}

                {/* Success */}
                {successMessage && (
                  <div className="mb-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    {successMessage}
                  </div>
                )}

                <form onSubmit={handleResetPassword}>

                  {/* New Password */}
                  <div className="mb-5">
                    <label
                      htmlFor="newPassword"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      New Password
                    </label>

                    <div className="relative">

                      <input
                        id="newPassword"
                        type={
                          showNewPassword
                            ? "text"
                            : "password"
                        }
                        value={newPassword}
                        onChange={(e) =>
                          setNewPassword(e.target.value)
                        }
                        placeholder="Enter new password"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-16 text-sm outline-none transition focus:border-[#A85D35] focus:ring-1 focus:ring-[#A85D35]"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowNewPassword(
                            (prev) => !prev
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[#A85D35]"
                      >
                        {showNewPassword
                          ? "Hide"
                          : "Show"}
                      </button>

                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="confirmNewPassword"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Confirm New Password
                    </label>

                    <div className="relative">

                      <input
                        id="confirmNewPassword"
                        type={
                          showConfirmNewPassword
                            ? "text"
                            : "password"
                        }
                        value={confirmNewPassword}
                        onChange={(e) =>
                          setConfirmNewPassword(
                            e.target.value
                          )
                        }
                        placeholder="Confirm new password"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-16 text-sm outline-none transition focus:border-[#A85D35] focus:ring-1 focus:ring-[#A85D35]"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmNewPassword(
                            (prev) => !prev
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[#A85D35]"
                      >
                        {showConfirmNewPassword
                          ? "Hide"
                          : "Show"}
                      </button>

                    </div>
                  </div>

                  {/* Reset Password */}
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#A85D35] py-3 font-medium text-white transition hover:bg-[#8f4d2d]"
                  >
                    Reset Password
                  </button>

                </form>
              </>
            )}

            <p className="mt-6 text-center text-sm text-gray-600">
              Remember your password?{" "}

              <button
                type="button"
                onClick={backToLogin}
                className="font-medium text-[#A85D35] hover:underline"
              >
                Login
              </button>
            </p>

          </div>
        ) : (

        

          <div className="rounded-2xl border border-white bg-white/95 p-8 shadow-xl backdrop-blur-sm">

            <h2 className="mb-6 text-2xl font-semibold text-gray-800">
              Login
            </h2>

            {errorMessage && (
              <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {errorMessage}
              </div>
            )}

            {successMessage && (
              <div className="mb-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleLogin}>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#A85D35] focus:ring-1 focus:ring-[#A85D35]"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <div className="relative">

                  <input
                    id="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-16 text-sm outline-none transition focus:border-[#A85D35] focus:ring-1 focus:ring-[#A85D35]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (prev) => !prev
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[#A85D35]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>
              </div>

              {/* ================= REMEMBER + FORGOT ================= */}
              <div className="mb-6 flex items-center justify-between">

                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="accent-[#A85D35]"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  onClick={openForgotPassword}
                  className="text-sm font-medium text-[#A85D35] hover:underline"
                >
                  Forgot password?
                </button>

              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#A85D35] py-3 font-medium text-white transition hover:bg-[#8f4d2d]"
              >
                Login
              </button>

            </form>

            <div className="my-6 flex items-center gap-3">

              <div className="h-px flex-1 bg-gray-200"></div>

              <span className="text-xs text-gray-400">
                OR
              </span>

              <div className="h-px flex-1 bg-gray-200"></div>

            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <FcGoogle size={20} />
              Continue with Google
            </button>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}

              <Link
                href="/register"
                className="font-medium text-[#A85D35] hover:underline"
              >
                Register
              </Link>
            </p>

          </div>
        )}
      </div>
    </div>
  );
}

export default Login;