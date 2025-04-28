import React, { use, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [open, setOpen] = useState(false);
  const { loginUser, googleLogin } = use(AuthContext);
  const handleEmailPassLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero h-[calc(100vh-65px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleEmailPassLogin} className="fieldset space-y-2">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input focus:outline-none"
              placeholder="Email"
            />
            <label className="label block">Password</label>
            <div className="input focus-within:ring-0 focus-within:outline-none">
              <input
                type={open ? "text" : "password"}
                className="focus:ring-0 focus:outline-none"
                name="password"
                placeholder="Password"
              />
              <div className="cursor-pointer" onClick={() => setOpen(!open)}>
                {open ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div>
              <span>Don't have any account? Please </span>
              <Link
                to="/signUp"
                className="link link-hover underline text-blue-600"
              >
                Sign Up
              </Link>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
