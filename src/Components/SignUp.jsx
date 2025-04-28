import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser } = use(AuthContext);
  const handleEmailPassAuth = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero h-[calc(100vh-65px)]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleEmailPassAuth} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input focus:outline-none"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input focus:outline-none"
              placeholder="Password"
            />
            <div>
              <span>Already have an account? Please </span>
              <Link
                to="/login"
                className="link link-hover text-blue-600 underline"
              >
                Login{" "}
              </Link>
            </div>
            <button className="btn btn-neutral mt-4">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
