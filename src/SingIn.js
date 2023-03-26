import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "./App";
import styles from "./SignIn.module.scss";
import logo from "./images/Logo.svg";

export const SingIn = () => {
  const navigate = useNavigate();
  const consumer = useContext(context);

  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    consumer.setSignin(true);
    navigate("dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.secondContainer}>
        <div className={styles.titles}>
          <img src={logo} alt="" />
          <h2>Get started</h2>
          <p>
            Don't have an account?<span>Sign up</span>
          </p>
        </div>
        <div className={styles.formContainer}>
          <label for="email">Email</label>
          <input
            className={styles.emailInput}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            value={email}
            id="email"
            label="Email"
            type="email"
          />
          <label for="password">Password</label>
          <input
            className={styles.passwordInput}
            value={password}
            required
            id="password"
            label="Password"
            type="password"
            onChange={(e) => {
              setPasword(e.target.value);
              e.preventDefault();
            }}
          />
        </div>
        <div className={styles.checkbox}>
          <div>
            <input type="checkbox" id="check" />
            <label for="check">Remember me</label>
          </div>
          <p>Forgot your password?</p>
        </div>
        <button type="submit" className={styles.buttonSignIn} to="/dashboard">
          {" "}
          Sign In
        </button>
      </div>
    </form>
  );
};
