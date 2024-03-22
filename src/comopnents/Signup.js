import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const defaultValue = "+91"

  return (
    <body>
      <div class="wrapper">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign-up</h1>
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
              type="email"
              placeholder="Email"
              name="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid.",
                },
              })}
            ></input>
            <box-icon type="solid" name="envelope"></box-icon>
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>

          <div className="input-box">
            <input
              type="number"
              placeholder="Phone-no"
              name="phone"
              {...register("phone", {
                required: "Phone-no is required",
                maxLength: {
                  value: 10,
                  message: "Phone number should have 10 numbers", 
                },
                
              })}
              defaultValue="+91" 
            ></input>
            <box-icon type="solid" name="phone"></box-icon>
            {errors.phone && (
              <p style={{ color: "red" }}>{errors.phone.message}</p>
            )}
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              {...register("Password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/,
                  message:
                    "Password must be 1 capital letter, at least 8 characters and 1 number ",
                },
              })}
            ></input>
            <box-icon type="solid" name="lock-alt"></box-icon>
            {errors.Password && (
              <p style={{ color: "red" }}>{errors.Password.message}</p>
            )}
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm password"
              name="confirm"
              {...register("confirm", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/,
                  message:
                    "Password must be 1 capital letter, at least 8 characters and 1 number ",
                },
              })}
            ></input>
            <box-icon type="solid" name="lock-alt"></box-icon>
            {errors.confirm && (
              <p style={{ color: "red" }}>{errors.confirm.message}</p>
            )}
          </div>

          <button type="submit" class="btn">
            Sign Up
          </button>
        </form>
      </div>
    </body>
  );
}
