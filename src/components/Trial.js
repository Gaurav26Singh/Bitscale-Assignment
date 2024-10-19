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

const Trial = () => {
  const features1 = [
    "25+ data sources",
    "GPT4, Linkedin and others",
    "Access to slack community",
    "10+ templates to scale your outbound",
  ];
  const features2 = ["Explore product capablities"];
  return (
    <div className="category">
      {/* First Part of card */}
      <div className="part1">
        <div className="tex">Trial</div>
        <h1 class="exp">Try now</h1>
        <p className="ol">Get personalised template</p>
      </div>
      <div className="part2">
        {/* Second Part of card */}
        <div className="props">
          {/* Used map to iterate over the features of 3nd part stored in array features1. */}
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

export default Trial;
