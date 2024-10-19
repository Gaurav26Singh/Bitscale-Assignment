import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { BiSolidOffer } from "react-icons/bi";

const Adv = ({ value }) => {
  return (
    <div className="prop">
      <FontAwesomeIcon
        className="tick"
        style={{ color: "white" }}
        icon={faCircleCheck}
      />
      <div className="propval" style={{ color: "white" }}>
        <p style={{ color: "white" }}>{value}</p>
      </div>
    </div>
  );
};

const List = ({ value }) => {
  return <li style={{ color: "white" }}>{value}</li>;
};

const Booster = () => {
  const features1 = [
    "8,000 Credits",
    "Webhook, HTTP API",
    "Credit rollover (upto 2x plan credits)",
    "Outbound email integrations like Instantly, Smartlead",
    "Dedicated 3 hours from Bitscale expert",
    "Advanced models like Claude Sonnet",
    "Dedicated 8 hours from Bitscale expert",
    "2 way Hubspot integration",
  ];

  const features2 = [
    "Unlimited leads search",
    "Fully enriched 15000 leads",
    "Personalized outreach at scale",
  ];

  return (
    <div className={"category booster"}>
      {/* First Part of card */}
      <div className="part1">
        <div className="masterp">
          <div className="tex" style={{ color: "white" }}>
            Growth
          </div>
          <div className="popu">
            <p>Popular</p>
          </div>
        </div>
        <div className="cprice" style={{ color: "white" }}>
          <h1 class="exp">$499</h1>
          <p style={{ color: "white" }}>/month</p>
        </div>
        <div className="discount">
          <div className="off">
            <BiSolidOffer />
            <p>50% off</p>
          </div>
          <p className="cutp" style={{ color: "white" }}>
            $999
          </p>
        </div>
      </div>
      {/* Second Part of card */}
      <div className="part2">
        {/* Used map to iterate over the features of 2nd part stored in array features1. */}
        <div className="props">
          {features1.map((val, idx) => {
            return <Adv value={val} />;
          })}
        </div>
      </div>
      <div className="divider" style={{ borderTopColor: "white" }}></div>
      {/* Third Part of card */}
      <div className="part3">
        {/* Used map to iterate over the features of 3nd part stored in array features2. */}
        <div className="props2">
          <ul className="props">
            {features2.map((val, idx) => {
              return <List value={val} />;
            })}
          </ul>
        </div>
      </div>
      {/* Third Part of card */}
      <div className="part4">
        <button
          className="btn"
          style={{ backgroundColor: "white", color: "black" }}
        >
          Continue with Booster
        </button>
      </div>
    </div>
  );
};

export default Booster;
