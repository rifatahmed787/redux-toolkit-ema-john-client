import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/UserContext";

import SmallSpinner from "../../../component/Spinner/SmallSpinner";

// import useToken from "../../Hooks/useToken/useToken";
import "./Signup.css";

const Signup = () => {
  const { SignUp, updateUser, SignOut, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  //   const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  //   if (token) {
  //     navigate("/");
  //   }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = (data) => {
    setError("");
    SignUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };

        updateUser(userInfo)
          .then(() => {
            // saveUser(data.name, data.email);
          })
          .catch((error) => console.error(error));
        SignOut()
          .then(() => {
            toast.success("Registered successfully. Please login...");
            navigate("/login");
          })
          .then(() => {});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //user post to database
  //   const saveUser = (name, email) => {
  //     const user = { name, email, verified: false };
  //     fetch("https://react-ema-john-pagination-server.vercel.app/allusers", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCreatedUserEmail(email);
  //         console.log(data);
  //       });
  //   };

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

  return (
    <div className="my-20  mx-auto lg:w-1/3 md:w-2/5 sm:w-11/12">
      <div className=" small-width bg-[#F3F4F6] dark:bg-black dark:border p-7 shadow-2xl border border-orange-400 rounded-xl">
        <h2 className="text-2xl font-bold text-orange-500 text-center dark:text-white">
          Sign up
        </h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control ">
            <label className="label">
              <span className="label-text dark:text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered bg-orange-100 dark:bg-black dark:text-white dark:border-white"
              style={{ fontSize: "14px", height: "50px" }}
            />
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text dark:text-white">Email</span>
            </label>
            <input
              type="Email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="input text-sm input-bordered bg-orange-100  dark:bg-black dark:text-white dark:border-white"
              style={{ fontSize: "14px", height: "50px" }}
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="******"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters or more",
                },
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  message:
                    "Password must have a number and a special character",
                },
              })}
              className="input text-sm input-bordered bg-orange-100  dark:bg-black dark:text-white dark:border-white"
              style={{ fontSize: "20px", height: "50px" }}
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          {loading ? (
            <button className="btn  bg-orange-500 hover:bg-orange-500 w-full mt-5 border-none">
              <SmallSpinner />
            </button>
          ) : (
            <input
              className="btn  bg-orange-500 hover:bg-orange-500 w-full mt-5 border-none"
              value="Sign up"
              type="submit"
            />
          )}

          <div>{setError && <p className="text-red-600">{error}</p>}</div>
        </form>
        <p className="mt-5 dark:text-white">
          Already have an account Please{" "}
          <Link className="text-orange-700 dark:text-primary link" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
