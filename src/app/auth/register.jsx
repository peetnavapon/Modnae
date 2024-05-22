import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export function Register() {
  const [value, setValue] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    Cpassword: "",
  });
  const [log, setLog] = useState("");
  const [isKmutt, setIsKmutt] = useState(false);
  const allowedDomains = ["mail.kmutt.ac.th"];

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    const email = e.target.value;
    const regex = /@(.+)$/;
    const domain = email.match(regex)[1];

    if (!allowedDomains.includes(domain)) {
      setIsKmutt(false);
    } else {
      setLog(""); // Clear error message
      setIsKmutt(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.password != value.Cpassword) {
      setLog("รหัสผ่านไม่ตรงกัน");
    }
    if (!isKmutt) {
      setLog("อีเมลของท่านต้องลงท้ายด้วย @mail.kmutt.ac.th");
    } else {
      axios
        .post("http://localhost:5000/api/register", value)
        .then((response) => {
          console.log(response);
          setLog(
            "เราได้ส่งลิงก์สำหรับยืนยันตัวตน กรุณาตรวจสอบกล่องจดหมายเข้าในอีเมลของคุณ"
          );
        })
        .catch((error) => {
          console.error(error);
          setLog("บัญชีนี้ถูกลงทะเบียนแล้ว");
        });
    }
  };
  return (
    <>
      <div>สร้างบัญชี</div>
      <form onSubmit={handleSubmit}>
        <label>StudentID</label>
        <input type="text" name="username" onChange={handleChange} />
        <label>Firstname</label>
        <input type="text" name="firstname" onChange={handleChange} />
        <label>lastname</label>
        <input type="text" name="lastname" onChange={handleChange} />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email@mail.kmutt.ac.th"
          onChange={handleChange}
        />
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <label>Confirm Password</label>
        <input type="password" name="Cpassword" onChange={handleChange} />
        <p>{log}</p>
        <button>Submit</button>
      </form>
    </>
  );
}
