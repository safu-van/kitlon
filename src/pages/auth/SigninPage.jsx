import React, { useState } from "react";
import { login } from "../../services/authService";
import { setItem } from "../../utils/localStorage";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const SigninPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const data = await login({ username, password });
      setItem("userData", data);
      toast.success("Logged In Successfully");
      if (data.role === "admin") {
        navigate("/admin");
      } else if (data.role === "labour") {
        navigate("/labour");
      } else {
        navigate("/sales");
      }
    } catch (error) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-dvh items-center justify-center bg-customGrey p-4">
      <div className="flex w-full flex-col items-center">
        <img
          src="/logo/kitlon-nobg.png"
          alt="logo"
          className="object-cover h-[5rem] w-[10rem]"
        />
        <div className="w-full max-w-[25rem] sm:max-w-[35rem] rounded-lg bg-white p-4 shadow-xl mt-6 sm:p-6">
          <h1 className="text-center text-xl font-medium">Sign In</h1>
          <hr className="mt-2 border-t-2 border-gray-300" />
          <div className="mt-5 flex flex-col gap-4 px-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-11 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 w-full rounded-md border-2 border-customRingGrey bg-customLightGrey pl-2 text-gray-500 focus:border-none focus:outline-none focus:ring-1 focus:ring-gray-400"
              placeholder="Password"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              onClick={handleLogin}
              disabled={loading}
              className={`mt-3 mb-1 h-11 w-full rounded-md bg-customGreen text-white transition-all duration-500 hover:bg-green-600 hover:shadow-lg active:scale-95 sm:text-lg ${
                loading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
