import React from "react";
import style from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";

const Card = ({ name, price, address, type, src, href, onclick }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.product_img}>
        <Image src={src} height={420} width={327} />
      </div>
      <div className={style.product_info}>
        <div className={style.product_text}>
          <h1>{name}</h1>
          <h2>{type}</h2>
          <p>{address}</p>
        </div>
        <div className={style.product_price_btn}>
          <p>
            ₹<span className={style.span}>{price}</span>
          </p>
          <div className={style.btn_container} style={{ display: "flex" }}>
            <Link href={href}>
              <button type={style.button}>about</button>
            </Link>
            <Link href={href} onclick={onclick}>
              <button type={style.button}>book now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
