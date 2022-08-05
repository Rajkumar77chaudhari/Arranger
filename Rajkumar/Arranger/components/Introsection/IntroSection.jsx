import React, { useState } from "react";

import hallP from "../../public/hallP.jpg";
import cam from "../../public/cam.jpg";
import bufee from "../../public/bufee.jpg";
import style from "./Introsection.module.scss";
import Image from "next/image";

export const IntroSection = () => {
  return (
    <div id={style.intro_section}>

      <div className={style.threePhotos}>
        <div className={style.Timages}>
          <Image
            id={style.hallP}
            src={hallP}
            alt="p"
            height={250}
            width={400}
          />
        </div>
        <div className={style.Timages}>
          <Image
            id={style.bufee}
            src={bufee}
            alt="p"
            height={250}
            width={400}
          />
        </div>
        <div className={style.Timages}>
          <Image id={style.cam} src={cam} alt="p" height={250} width={400} />
        </div>
      </div>

      <div className={style.message}>
        <h2 id={style.slogn}>
          From <p style={{ color: "#7a41cc", display: "contents" }}>Halls</p>
          ... To
          <p style={{ color: "#7a41cc", display: "contents" }}>Photographer</p>.
          We have everything to make your event{" "}
          <p style={{ color: "#7a41cc", display: "contents" }}>memorable</p>.
        </h2>
        <button id={style.btn}>Book Now</button>
      </div>
    </div>
  );
};
