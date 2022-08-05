import React, { useState, useEffect } from "react";
import style from "./signup.module.scss";
const axios = require("axios");

const signup = () => {
  const [name, setName] = useState("");
  const [catagory, setCatagory] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  // const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [owner, setOwner] = useState("");

  const onFileChange = (e) => setImage(e.target.files[0]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("catagory", catagory);
    formData.append("address", address);
    formData.append("price", price);
    formData.append("owner", owner);

    const body = formData;

    try {
      const res = await axios.post(
        "http://localhost:8000/services/",
        body,
        config
      );

      if (res.status === 201) {
        console.log(body);
        console.log("Your form submitted");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.signup_container}>
      <form onSubmit={onSubmit} className={style.form_wrapper}>
        <div className={style.header}>
          <h1>Become a Service Provider</h1>
        </div>
        <hr />
        <label className={style.label}>Name of Service:</label>
        <input
          className={style.input_text}
          type="text"
          name="name"
          id="service_Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
        <label className={style.label}>Owner of Service:</label>
        <input
          className={style.input_text}
          type="text"
          name="name"
          id="service_Name"
          value={owner}
          onChange={(e) => {
            setOwner(e.target.value);
          }}
          placeholder="Name"
        />

        <label className={style.label}>Catagory:</label>
        <select
          className={style.selector_box}
          name="catagory"
          id="catagory"
          value={catagory}
          onChange={(e) => {
            setCatagory(e.target.value);
          }}
          defaultValue="Services"
          placeholder="Services"
        >
          <option value="Services">Services</option>
          <option value="Hall">Hall</option>
          <option value="Catrace">Catrace</option>
          <option value="Decorator">Decorator</option>
          <option value="Photographer">Photographer</option>
          <option value="DJ">DJ</option>
        </select>

        <label className={style.label}>Price:</label>
        <input
          className={style.input_text}
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Price"
        />

        <label className={style.label}>Address:</label>
        <textarea
          className={style.textarea}
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder="Address"
        />

        <label className={style.label}>Upload an Image:</label>
        <input
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          onChange={onFileChange}
        />

        <div className={style.btn_container}>
          <button className={style.btn} onSubmit={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default signup;
