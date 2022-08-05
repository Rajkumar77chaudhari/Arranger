import React from "react";
import Logo from "../../public/logo.svg";
import Facebook from "@material-ui/icons/Facebook";
import { Instagram } from "@material-ui/icons";
import Twitter from "@material-ui/icons/Twitter";
import style from "../Footer/Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={style.footer_container}>
        <div className={style.logo_social}>
          <div
            style={{
              backgroundColor: "#faf7ff",
              margin: "25px",
              boxShadow: "-5px 5px 8px #7a41cc",
            }}
          >
            <Image src={Logo} alt="Arranger" />
          </div>

          <div className={style.social_container}>
            <Facebook
              style={{ fontSize: "80px", margin: "0 10px" }}
              className={style.MuiSvgIcon_root}
            />
            <Instagram
              style={{ fontSize: "80px", margin: "0 10px" }}
              className={style.MuiSvgIcon_root}
            />
            <Twitter
              style={{ fontSize: "80px", margin: "0 10px" }}
              className={style.MuiSvgIcon_root}
            />
          </div>
        </div>
        <div className={style.feedback_container}>
          <h2 style={{ margin: "20px 0", color: "#7a41cc" }}>FEEDBACK</h2>
          <input
            type="text"
            name="name"
            id={style.name}
            placeholder="Name"
            className={style.text_input}
          />
          <input
            type="text"
            name="number"
            id={style.number}
            placeholder="Mobile No."
            className={style.text_input}
          />
          <input
            type="text"
            name="email"
            id={style.email}
            placeholder="Email ID"
            className={style.text_input}
          />
          <textarea
            style={{ height: "100px", width: "400px" }}
            type="text"
            name="feedback"
            id={style.feedback}
            placeholder="Write you feedback..."
          />
          <button type="submit" id={style.feed_btn}>
            submit
          </button>
        </div>
      </div>
      <div className={style.copyright_container}>
        <h2> © Arrager - 2021</h2>
      </div>
    </>
  );
};

export default Footer;
