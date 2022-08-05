import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ name, src, }) => {
  const cardContainer = {
    color: "red",
    height: "600px",
    width: "470px",
    display: "flex",
    flexDirection: "column",
    alignItem: "space-between",
    justifyContent: "center",
    margin: "20px",
    cursor: "pointer",
  };
  return (
    <>
      <div style={cardContainer}>
        <Image src={src} height={550} width={450} />
        <h2 style={{ color: "blue" }}>{name}</h2>
      </div>
    </>
  );
};

export default Card;
