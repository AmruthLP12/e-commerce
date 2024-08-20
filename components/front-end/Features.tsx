import { featuresData } from "@/data";
import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
      {featuresData.map((item) => (
        <FeatureCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Features;
