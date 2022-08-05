import React from "react";
import { useState } from "react";
import style from "./Login.module.scss";
import axios from "axios";

import ImageUpload from "../ImageUpload/ImageUpload";
const Login = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAdress] = useState("");
  const [mobile, setMobile] = useState("");
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };

    const formData = new FormData();
    formData.append("fullname", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("image", uploadedImage.current.file);
    formData.append("phone_number", mobile);

    const body = formData;

    try {
      const res = await axios.post(
        "http://localhost:8000/users/",
        body,
        config
      );

      if (res.status === 201) {
        console.log(body);
        console.log("Your form submitted");
      }
    } catch (err) {
      console.log(err);
      console.log(uploadedImage.current.file);
    }
  };

  return (
    <div class={style.container}>
      <div class={style.card}>
        <div class={style.card_image}>
          <h2 class={style.card_heading}>
            Get started
            <small>Let us create your account</small>
          </h2>
        </div>
        <form class={style.card_form} onSubmit={onSubmit}>
          <ImageUpload
            uploadedImage={uploadedImage}
            imageUploader={imageUploader}
          />
          <div class={style.input}>
            <input
              type="text"
              class={style.input_field}
              value={fullName}
              onChange={(e) => {
                e.preventDefault, setFullName(e.target.value);
              }}
              required
            />
            <label class={style.input_label}>Full name</label>
          </div>
          <div class={style.input}>
            <input
              type="text"
              class={style.input_field}
              value={email}
              required
              onChange={(e) => {
                e.preventDefault, setEmail(e.target.value);
              }}
            />
            <label class={style.input_label}>Email</label>
          </div>
          <div class={style.input}>
            <input
              type="text"
              class={style.input_field}
              value={address}
              required
              onChange={(e) => {
                e.preventDefault, setAdress(e.target.value);
              }}
            />
            <label class={style.input_label}>Address</label>
          </div>
          <div class={style.input}>
            <input
              type="text"
              class={style.input_field}
              value={mobile}
              required
              onChange={(e) => {
                e.preventDefault, setMobile(e.target.value);
              }}
            />
            <label class={style.input_label}>Contact No.</label>
          </div>
          <div class={style.input}>
            <input
              type="password"
              class={style.input_field}
              value={password}
              required
              onChange={(e) => {
                e.preventDefault, setPassword(e.target.value);
              }}
            />
            <label class={style.input_label}>Password</label>
          </div>
          <div class={style.action}>
            <button class={style.action_button} onClick={onSubmit}>
              Get started
            </button>
          </div>
        </form>
        <div class={style.card_info}>
          <p>
            By signing up you are agreeing to our{" "}
            <a href="#">Terms and Conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
