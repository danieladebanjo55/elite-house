import React from "react";
import "./Packages.scss";
import Subscription from "./Subscription/Subscription";

export default function Packages() {
  return (
    <>
      <div className="main__package">
        <div className="upper__package">
          <h2 className="pack__title">选择计划</h2>
          <p className="pack__subtext">早鸟优惠</p>
        </div>
        <div className="lower__package">
          <Subscription />
        </div>
      </div>
    </>
  );
}
