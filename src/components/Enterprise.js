import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

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

const Enterprise = () => {
  const features1 = [
    "Data privacy certification",
    "Priority Support",
    "Dedicated Bitscale expert",
    "Private Slack Channel",
    "Collaborative workspace and templates",
  ];
  const features2 = [
    "Perfect for High-Volume End- to-End CRM Data Enrichment",
    "Unlimited list of leads with unlimited data points",
  ];
  return (
    <div className="category">
      {/* First Part of card */}
      <div className="part1">
        <div className="tex">Enterprise</div>
        <h1 class="exp">Contact Us</h1>
        <p className="ol">For individual pricing</p>
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
        <button className="btn">Try Now</button>
      </div>
    </div>
  );
};

export default Enterprise;
