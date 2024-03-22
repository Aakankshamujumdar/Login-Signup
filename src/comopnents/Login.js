import React from "react";
import { useForm } from "react-hook-form";
import "boxicons";
import "../css/login.css";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <body>
      <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              name="Username"
              {...register("Username", {
                required: "Username is required",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Username is not valid",
                },
              })}
            ></input>
            <box-icon type="solid" name="user"></box-icon>
            {errors.Username && (
              <p style={{ color: "red" }}>{errors.Username.message}</p>
            )}
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="password"
              name="password"
              {...register("password", {
                required: "password is required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/,
                  message:
                    "Password must be 1 capital letter, at least 8 characters and 1 number ",
                },
              })}
            ></input>
            <box-icon type="solid" name="lock-alt"></box-icon>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox"></input>Remember Me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register</a>{" "}
            </p>
          </div>
        </form>
      </div>
    </body>
  );
}
