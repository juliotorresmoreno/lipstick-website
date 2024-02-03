"use client";
import StripePricingTable from "./StripePricingTable";

export function Pricing() {
  return (
    <section className="bg-white flex flex-row" id="pricing">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-default text-muted">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="font-bold leading-tighter font-heading tracking-tighter text-heading md:text-4xl text-3xl">
            Designed for business teams like yours
          </h2>
          <p className="text-muted text-xl mt-4">
            Here at Lipstick we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="">
          <StripePricingTable />
        </div>
      </div>
    </section>
  );
}
