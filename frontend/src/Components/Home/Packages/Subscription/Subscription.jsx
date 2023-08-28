import React from "react";
import "./Subscription.scss";

// SubscriptionPackageCard component
const SubscriptionPackageCard = ({
  title,
  Fprice,
  Rprice,
  benefits,
  onSelect,
}) => {
  return (
    <div className="subscription-card">
      <h2>{title}</h2>
      <p>{Fprice}</p>
      <p>{Rprice}</p>
      <button onClick={onSelect}>登记</button>
    </div>
  );
};

// Example usage:
const Subscription = () => {
  // Sample data for two subscription packages
  const package1 = {
    title: "Package 1",
    Fprice: "#3000",
    Rprice: "#2000",
  };

  return (
    <div className="main__sub">
      <SubscriptionPackageCard
        title="普通会员"
        Fprice={package1.Fprice}
        Rprice={package1.Rprice}
        onSelect={() => {
          // Handle package selection for package 1
          console.log(`Selected ${package1.title}`);
        }}
      />
      <SubscriptionPackageCard
        title="公司会员"
        Fprice={package1.Fprice}
        Rprice={package1.Rprice}
        onSelect={() => {
          // Handle package selection for package 1
          console.log(`Selected ${package1.title}`);
        }}
      />
    </div>
  );
};

export default Subscription;
