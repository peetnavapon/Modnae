import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//redux
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [log, setLog] = useState("");
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const roleBaseRedirect = (role) => {
    if (role === "admin") {
      navigate("/");
    } else {
      navigate("/");
    }
  };
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", value)
      .then((response) => {
        dispatch({
          type: "LOGIN",
          payload: {
            token: response.data.token,
            username: response.data.payload.user.username,
            firstname: response.data.payload.user.firstname,
            lastname: response.data.payload.user.lastname,
            email: response.data.payload.user.email,
            role: response.data.payload.user.role,
          },
        });
        localStorage.setItem("token", response.data.token);
        roleBaseRedirect(response.data.payload.user.role);
      })
      .catch((error) => {
        setLog("รหัสผ่านหรืออีเมลไม่ถูกต้อง");
      });
  };
  return (
    <>
      <div>เข้าสู่ระบบ</div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <p>{log}</p>
        <button>Submit</button>
      </form>
      <button>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </button>
    </>
  );
}
