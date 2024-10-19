import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { BiSolidOffer } from "react-icons/bi";

const Adv = ({ value }) => {
  return (
    <div className="prop">
      <FontAwesomeIcon className="tick" icon={faCircleCheck} />
      <div className="propval">
        <p>{value}</p>
      </div>
    </div>
  );
};

const List = ({ value }) => {
  return <li>{value}</li>;
};

const Growth = () => {
  const features1 = [
    "8,000 Credits",
    "Webhook, HTTP API",
    "Credit rollover (upto 2x plan credits)",
    "Outbound email integrations like Instantly, Smartlead",
    "Dedicated 3 hours from Bitscale expert",
  ];
  const features2 = [
    "Unlimited leads search",
    "Fully enriched 5000 leads",
    "Personalized outreach at scale",
  ];
  return (
    <div className="category">
      {/* First Part of card */}
      <div className="part1">
        <div className="tex">Growth</div>
        <div className="cprice">
          <h1 class="exp">$229</h1>
          <p>/month</p>
        </div>
        <div className="discount">
          <div className="off">
            <BiSolidOffer />
            <p>50% off</p>
          </div>
          <p className="cutp">$459</p>
        </div>
      </div>
      {/* Second Part of card */}
      <div className="part2">
        {/* Used map to iterate over the features of 3nd part stored in array features1. */}
        <div className="props">
          {features1.map((val, idx) => {
            return <Adv value={val} />;
          })}
        </div>
      </div>
      <div className="divider"></div>
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
      {/* Fourth Part of card */}
      <div className="part4">
        <button className="btn">Continue with Growth</button>
      </div>
    </div>
  );
};

export default Growth;
