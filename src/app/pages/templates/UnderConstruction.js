import React from "react";
import { FaHammer, FaCog, FaTruck } from "react-icons/fa";

/* This page is a template you can use for incomplete pages */

export default function UnderConstruction() {
  return (
    <div className="construction">
      <div className="container">
        <FaHammer className="hammer" />
        <p>Page is under Construction, plese return later.</p>
        <FaCog className="cog" />
      </div>
      <FaTruck className="truck" />
    </div>
  );
}