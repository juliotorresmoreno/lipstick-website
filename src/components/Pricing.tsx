import { Plan } from "@/components/Plan";

export function Pricing() {
  return (
    <section className="bg-white" id="pricing">
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
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <Plan
            code="free"
            title="Free"
            description="Best for large scale uses and extended redistribution rights."
            price="0"
            features={[
              "Individual configuration",
              "No setup, or hidden fees",
              <>
                Team size: <span className="font-semibold">1 developer</span>
              </>,
              <>
                Support: <span className="font-semibold">No</span>
              </>,
              <>
                <span className="font-semibold">
                  Up to 1 million request/month
                </span>
                , then service is disabled until next month
              </>,
              "Free updates",
              ,
            ]}
          />

          <Plan
            code="starter"
            title="Starter"
            description="Best for large scale uses and extended redistribution rights."
            price="$20"
            features={[
              "Individual configuration",
              "No setup, or hidden fees",
              <>
                Team size: <span className="font-semibold">5 developer</span>
              </>,
              <>
                Support: <span className="font-semibold">Standart</span>
              </>,
              <>
                <span className="font-semibold">
                  Up to 10 million request/month
                </span>
                , then 1 dollar per million requests
              </>,
              <>Free updates</>,
            ]}
          />

          <Plan
            code="company"
            title="Company"
            description="Best for large scale uses and extended redistribution rights."
            price="$100"
            features={[
              "Individual configuration",
              "No setup, or hidden fees",
              <>
                Team size: <span className="font-semibold">100 developers</span>
              </>,
              <>
                Support: <span className="font-semibold">Premium</span>
              </>,
              <>
                <span className="font-semibold">
                  Up to 10 million request/month
                </span>
                , then 1 dollar per million requests
              </>,
              <>Free updates</>,
            ]}
          />
        </div>
      </div>
    </section>
  );
}
