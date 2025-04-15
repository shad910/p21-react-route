import { use } from "react";
import PricingCard from "./pricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <section className="my-8">
      <h3 className="text-4xl md:text-center font-semibold">Get Membership</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {pricingData.map((option) => (
          <PricingCard key={option.id} option={option}></PricingCard>
        ))}
      </div>
    </section>
  );
};

export default PricingOptions;
