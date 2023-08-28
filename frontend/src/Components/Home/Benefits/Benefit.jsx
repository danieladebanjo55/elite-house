import React from "react";
import "./Benefit.scss";
import Card from "./Cards/Card";
import Image from "./mastercard.png";

export default function Benefit() {
  return (
    <>
      <div className="benefit__main">
        <div className="upper">
          <h2 className="bene__title">What's In It For You</h2>
          <p className="bene__subtext">
            Here's a few of the many benefits you will enjoy as an Elite House
            Member
          </p>
        </div>
        <div className="lower">
          <Card image={Image} title="Name" subtitle="Golden Ticket" />
          <Card image={Image} title="Name" subtitle="Golden Ticket" />
          <Card image={Image} title="Name" subtitle="Golden Ticket" />
          <Card image={Image} title="Name" subtitle="Golden Ticket" />
          <Card image={Image} title="Name" subtitle="Golden Ticket" />
          <Card image={Image} title="Name" subtitle="Golden Ticket" />
        </div>
      </div>
    </>
  );
}
