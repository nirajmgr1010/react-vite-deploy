import React from "react";

const Login = () => {
  const inputs = [
    { type: "text", placeholder: "Username" },
    { type: "password", placeholder: "Password" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="w-[900px] h-[500px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl flex overflow-hidden">

        {/* Left Panel */}
        <div className="flex-1 flex flex-col justify-center items-center text-white p-10 bg-gradient-to-br from-white/10 to-white/5">
          <h1 className="text-4xl font-bold mb-4">Welcome Back 👋</h1>
          <p className="text-gray-200 text-center max-w-sm">
            Login to continue building amazing projects and managing your portfolio.
          </p>
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex flex-col justify-center px-14">
          <h2 className="text-white text-3xl font-semibold text-center mb-8">
            Login
          </h2>

          {inputs.map((input, index) => (
            <input
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              className="mb-5 px-5 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white transition"
            />
          ))}

          <button className="bg-white text-indigo-700 font-semibold py-3 rounded-xl hover:scale-105 hover:bg-gray-200 transition-all duration-300 shadow-lg">
            Sign In
          </button>

          <p className="text-gray-200 text-sm text-center mt-6">
            New user?{" "}
            <span className="text-white font-medium cursor-pointer hover:underline">
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;